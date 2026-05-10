/**
 * Thin wrapper around gtag. Everything analytics-related goes through here
 * so the rest of the app never touches window.gtag directly.
 *
 * Skips events on localhost so dev traffic doesn't pollute the GA dashboard.
 * Silently no-ops if gtag failed to load (ad blocker still managed to block,
 * network failure, etc.) — never throws.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const isProd = (): boolean => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host !== 'localhost' && host !== '127.0.0.1' && !host.endsWith('.local');
};

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!isProd()) {
    // eslint-disable-next-line no-console
    console.debug('[analytics:dev]', name, params);
    return;
  }
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', name, params);
  } catch {
    // Never let analytics break the page.
  }
}

export const Events = {
  SECTION_VIEW: 'section_view',
  OUTBOUND_CLICK: 'outbound_click',
  CTA_CLICK: 'cta_click',
} as const;
