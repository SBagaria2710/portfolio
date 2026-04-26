import { useEffect } from 'react';

export function useTabTitle(title: string): void {
  useEffect(() => {
    document.title = title;
    let idx = 0;
    const onHide = (): void => {
      document.title = `Portfolio entering idle mode`;
      idx++;
    };
    const onShow = (): void => { document.title = title; };
    const onVisChange = (): void => { document.hidden ? onHide() : onShow(); };

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
