import { useEffect } from 'react';
import { Events, trackEvent } from '../lib/analytics';

/**
 * Fires a `section_view` event the first time each <section id="..."> enters
 * the viewport. Each section is reported exactly once per page load — repeated
 * scroll-bys are ignored.
 *
 * Threshold of 0.25 = section needs to be 25% in view to count. This avoids
 * counting a section as "seen" when only its top edge is barely visible.
 */
export function useSectionTracking(): void {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    if (sections.length === 0) return;

    const seen = new Set<string>();

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).id;
          if (!id || seen.has(id)) return;
          seen.add(id);
          trackEvent(Events.SECTION_VIEW, { section_id: id });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach(section => io.observe(section));
    return () => io.disconnect();
  }, []);
}
