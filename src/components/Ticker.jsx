export default function Ticker({ children, speed = 50 }) {
  return (
    <div className="ticker" role="region" aria-label="Marquee">
      <div className="ticker__rail" style={{ animationDuration: `${speed}s` }} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
