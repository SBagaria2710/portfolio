import { useState, useEffect, useRef } from 'react';

interface Code {
  readonly line: string;
  readonly by: string;
  readonly url: string | null;
}

const CODES = {
  mellon:   { line: 'Speak, friend, and enter.',          by: 'LotR · The Fellowship of the Ring', url: 'https://www.imdb.com/title/tt0120737/' },
  assemble: { line: 'Avengers… assemble.',                by: 'Marvel · Avengers: Endgame',        url: 'https://www.imdb.com/title/tt4154796/' },
  pivot:    { line: 'PIVOT! PIVOT! PIVOT!',               by: 'Friends · Ross, with a couch',      url: 'https://www.imdb.com/title/tt0108778/' },
  valar:    { line: 'Valar morghulis.',                   by: 'Game of Thrones · all men must die',url: 'https://www.imdb.com/title/tt0944947/' },
  hodor:    { line: 'Hodor.',                             by: 'Game of Thrones · hold the door',   url: 'https://www.imdb.com/title/tt0944947/' },
  legend:   { line: 'Legen— wait for it —dary.',         by: 'HIMYM · Barney Stinson',            url: 'https://www.imdb.com/title/tt0460649/' },
  groot:    { line: 'I am Groot.',                        by: 'Marvel · Guardians of the Galaxy',  url: 'https://www.imdb.com/title/tt2015381/' },
  totoro:   { line: 'Trees and people used to be good friends.', by: 'Studio Ghibli · My Neighbor Totoro', url: 'https://www.imdb.com/title/tt0096283/' },
  knock:    { line: 'I am the one who knocks.',           by: 'Breaking Bad · Walter White',       url: 'https://www.imdb.com/title/tt0903747/' },
  priyanka: { line: 'I like you, Priyanka Yadav 💛',     by: 'Shashwat Bagaria',                  url: null },
} as const satisfies Record<string, Code>;

type CodeKey = keyof typeof CODES;
const CODE_KEYS = Object.keys(CODES) as readonly CodeKey[];

export default function Whisper() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<Code | null>(null);
  const bufRef = useRef('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.length !== 1) return;

      bufRef.current = (bufRef.current + e.key.toLowerCase()).slice(-12);

      for (const code of CODE_KEYS) {
        if (bufRef.current.endsWith(code)) {
          setContent(CODES[code]);
          setVisible(true);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setVisible(false), 5400);
          bufRef.current = '';
          return;
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className={`whisper${visible ? ' in' : ''}`} role="status" aria-live="polite">
      {content && (
        <>
          &ldquo;{content.line}&rdquo;
          {content.url ? (
            <a className="by" href={content.url} target="_blank" rel="noopener noreferrer">
              — {content.by}
            </a>
          ) : (
            <span className="by">— {content.by}</span>
          )}
        </>
      )}
    </div>
  );
}
