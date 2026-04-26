import { useEffect } from 'react';

export function useConsoleEgg(): void {
  useEffect(() => {
    const c1 = 'font-family:ui-monospace,monospace;font-size:14px;color:#D9A441;letter-spacing:0.18em;';
    const c2 = 'font-family:Georgia,serif;font-style:italic;font-size:14px;color:#1A1612;background:#F2EAD3;padding:2px 6px;';
    const c3 = 'font-family:ui-monospace,monospace;font-size:11px;color:#5A4F44;letter-spacing:0.06em;';
    try {
      console.log('%c    A LONG TIME AGO IN A REPO FAR, FAR AWAY...    ', c1);
      console.log('%c           — Episode VI: The Portfolio —          ', c1);
      console.log('%cIt is a period of civil deploys. Rebel engineers, striking from a hidden branch, have won their first victory against the evil Legacy Service.', c2);
      console.log('%c—', c3);
      console.log('%c hi. say hi back: shashwawtforwork@gmail.com ', c3);
      console.log('%c try typing one of: mellon · assemble · pivot · valar · hodor · knock ', c3);
    } catch {
      /* console may not exist in some sandboxes */
    }
  }, []);
}
