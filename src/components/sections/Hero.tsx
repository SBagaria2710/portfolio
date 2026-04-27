import Ticker from '../Ticker';

export default function Hero() {
  return (
    <>
      <Ticker speed={50}>
        <span>fullstack engineer</span><span className="glyph">✦</span>
        <span>react · node · typescript</span><span className="glyph">✦</span>
        <span>product thinker</span><span className="glyph">✦</span>
        <span>educator</span><span className="glyph">✦</span>
        <span>occasional writer</span><span className="glyph">✦</span>
        <span>cricket enthusiast</span><span className="glyph">✦</span>
        <span>6+ years shipping things</span><span className="glyph">✦</span>
        <span>based in bengaluru</span><span className="glyph">✦</span>
        <span>currently at deel</span><span className="glyph red">◆</span>
      </Ticker>

      <div className="frame">
        <div className="hero">
          <div className="hero__rule" />
          <div className="hero__topbar">
            <span>Est. 1996&nbsp;<span className="dot">●</span>&nbsp;Bengaluru, India</span>
            <span>Currently @ Deel&nbsp;<span className="dot">●</span>&nbsp;GMT+5:30</span>
          </div>

          <h1 className="hero__name">
            Sha<em>sh</em>wat
            <span className="sub">— senior software engineer · React, system design & monorepo specialist · remote from Lucknow.</span>
          </h1>

          <div className="hero__cursorline">
            <span className="prompt">~/portfolio $</span>
            <span>6 years shipping high-scale systems in React, TypeScript & Node — 100M+ users served.</span>
            <span className="pipe">|</span>
            <span className="cursor" aria-hidden="true" />
          </div>

          <dl className="hero__stats">
            <div><dt>Experience</dt><dd>6+ yrs<small>in production systems</small></dd></div>
            <div><dt>Companies</dt><dd>3+<small>Deel · JioHotstar · Cars24</small></dd></div>
            <div><dt>Stack</dt><dd>React / TS<small>+ Node · Vite · System Design</small></dd></div>
            <div><dt>Location</dt><dd>Remote<small>Lucknow, India · GMT+5:30</small></dd></div>
          </dl>
        </div>
      </div>
    </>
  );
}
