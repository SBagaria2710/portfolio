import { useEffect } from 'react';
import { Events, trackEvent } from '../lib/analytics';

/**
 * Single delegated click listener for all anchors on the page.
 *
 * - Any anchor pointing to an external host fires `outbound_click`.
 * - Any anchor with [data-cta="<name>"] fires `cta_click` with that name.
 *   Use this on important conversion links (Calendly, Resume, etc.) so they
 *   show up cleanly in GA instead of being lumped in outbound_click.
 *
 * Mailto and tel links are tracked as outbound_click too — they're real intent
 * signals.
 */
export function useLinkTracking(): void {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href || href.startsWith('#')) return;

      const cta = anchor.getAttribute('data-cta');
      if (cta) {
        trackEvent(Events.CTA_CLICK, {
          cta_name: cta,
          href,
        });
      }

      const isExternal =
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:');

      if (!isExternal) return;

      // For real http(s) links, only count as outbound if host differs from current.
      if (href.startsWith('http')) {
        try {
          const linkHost = new URL(href).host;
          if (linkHost === window.location.host) return;
        } catch {
          return;
        }
      }

      trackEvent(Events.OUTBOUND_CLICK, {
        href,
        link_text: (anchor.textContent || '').trim().slice(0, 80),
      });
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}
