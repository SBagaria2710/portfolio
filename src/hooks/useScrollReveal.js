import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const showAll = () => targets.forEach(el => el.classList.add('in'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll();
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      showAll();
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh) setTimeout(() => el.classList.add('in'), 60 * i);
    });

    const io = new IntersectionObserver(
      entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }),
      { threshold: 0, rootMargin: '0px 0px -5% 0px' }
    );
    targets.forEach(el => io.observe(el));

    const fallback = setTimeout(showAll, 1500);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, [pathname]);
}
