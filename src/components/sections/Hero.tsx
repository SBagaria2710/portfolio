import Ticker from '../Ticker';

export default function Hero() {
  return (
    <>
      <Ticker speed={50}>
        <span>fullstack engineer</span><span className="glyph">✦</span>
        <span>react · node · typescript</span><span className="glyph">✦</span>
        <span>product thinker</span><span className="glyph">✦</span>
        <span>occasional writer</span><span className="glyph">✦</span>
        <span>cricket enthusiast</span><span className="glyph">✦</span>
        <span>6+ years shipping things</span><span className="glyph">✦</span>
        <span>based in bengaluru</span><span className="glyph">✦</span>
        <span>currently at deel</span><span className="glyph red">◆</span>
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
            <span className="sub">— fullstack engineer, educator, occasional writer, person on the internet.</span>
          </h1>

          <div className="hero__cursorline">
            <span className="prompt">~/portfolio $</span>
            <span>6 years building things people actually use at scale.</span>
            <span className="pipe">|</span>
            <span className="cursor" aria-hidden="true" />
          </div>

          <dl className="hero__stats">
            <div><dt>Experience</dt><dd>6+ yrs<small>in production systems</small></dd></div>
            <div><dt>Companies</dt><dd>3+<small>Deel · JioHotstar · Cars24</small></dd></div>
            <div><dt>Stack</dt><dd>JS/TS<small>+ React · Node · Vite</small></dd></div>
            <div><dt>Currently</dt><dd>SSE<small>@ Deel · Remote</small></dd></div>
          </dl>
        </div>
      </div>
    </>
  );
}
