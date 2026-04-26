import { useEffect } from 'react';

const AWAY_TITLES = [
  '— winter is coming.',
  '— I am Groot.',
  '— legen— wait for it.',
  '— we were on a break.',
  '— hodor.',
  '— this is the way.',
  '— pivot! pivot!',
  '— I declare bankruptcy.',
];

export function useTabTitle(title) {
  useEffect(() => {
    document.title = title;
    let idx = 0;
    const onHide = () => { document.title = AWAY_TITLES[idx % AWAY_TITLES.length]; idx++; };
    const onShow = () => { document.title = title; };
    const onVisChange = () => (document.hidden ? onHide() : onShow());

    document.addEventListener('visibilitychange', onVisChange);
    window.addEventListener('blur', onHide);
    window.addEventListener('focus', onShow);
    return () => {
      document.removeEventListener('visibilitychange', onVisChange);
      window.removeEventListener('blur', onHide);
      window.removeEventListener('focus', onShow);
    };
  }, [title]);
}
