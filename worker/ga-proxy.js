/**
 * Cloudflare Worker: Google Analytics proxy.
 *
 * Routes:
 *   GET  /ga/script   -> proxies googletagmanager.com/gtag/js (with body rewrite)
 *   POST /ga/collect  -> proxies google-analytics.com/g/collect
 *
 * Why: ad blockers block requests to google-analytics.com / googletagmanager.com
 * by hostname. Routing through your own domain bypasses the hostname-based block.
 */

const GTM_ORIGIN = 'https://www.googletagmanager.com';
const GA_ORIGIN = 'https://www.google-analytics.com';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/ga/script') {
      return proxyScript(url);
    }

    if (url.pathname === '/ga/collect' || url.pathname === '/ga/g/collect') {
      return proxyCollect(request, url);
    }

    return new Response('Not found', { status: 404 });
  },
};

async function proxyScript(url) {
  const measurementId = url.searchParams.get('id');
  if (!measurementId) {
    return new Response('Missing id', { status: 400 });
  }

  const upstream = `${GTM_ORIGIN}/gtag/js?id=${encodeURIComponent(measurementId)}`;
  const response = await fetch(upstream, {
    cf: { cacheEverything: true, cacheTtl: 3600 },
  });

  let body = await response.text();

  // The fetched script contains hardcoded calls to google-analytics.com.
  // Rewrite them so the browser sends events to our proxy instead.
  body = body.replace(
    /https?:\/\/www\.google-analytics\.com\/g\/collect/g,
    `${url.origin}/ga/collect`
  );

  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}

async function proxyCollect(request, url) {
  const upstream = new URL(`${GA_ORIGIN}/g/collect`);
  upstream.search = url.search;

  // Forward the user's real IP. Otherwise GA sees Cloudflare's edge IP
  // and geo data is wrong.
  const headers = new Headers(request.headers);
  const userIP = request.headers.get('CF-Connecting-IP');
  if (userIP) headers.set('X-Forwarded-For', userIP);

  // Strip the host header so it doesn't leak our domain to GA.
  headers.delete('host');

  const upstreamResponse = await fetch(upstream.toString(), {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
  });

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: upstreamResponse.headers,
  });
}
