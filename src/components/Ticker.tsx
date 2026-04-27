import type { ReactNode } from 'react';

interface TickerProps {
  children: ReactNode;
  speed?: number;
}

export default function Ticker({ children, speed = 50 }: TickerProps) {
  return (
    <div className="ticker" role="region" aria-label="Marquee">
      <div className="ticker__rail" style={{ animationDuration: `${speed}s` }} aria-hidden="true">
        <span className="ticker__set">{children}</span>
        <span className="ticker__set" aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}
