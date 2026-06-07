import Ticker from '../Ticker';

export default function Hero() {
  return (
    <>
      <Ticker speed={50}>
        <span>senior product engineer</span><span className="glyph">✦</span>
        <span>react · node · typescript</span><span className="glyph">✦</span>
        <span>educator</span><span className="glyph">✦</span>
        <span>product thinker</span><span className="glyph">✦</span>
        <span>occasional writer</span><span className="glyph">✦</span>
        <span>cinema enthusiast</span><span className="glyph">✦</span>
        <span>6+ years shipping things</span><span className="glyph">✦</span>
        <span>based in bengaluru/lucknow</span><span className="glyph">✦</span>
        <span>currently at deel</span><span className="glyph red">◆</span>
      </Ticker>

      <div className="frame">
        <div className="hero">
          <div className="hero__rule" />
          <div className="hero__topbar">
            <span>Est. 1996&nbsp;<span className="dot">●</span>&nbsp;Lucknow, India</span>
            <span>Currently @ Deel&nbsp;<span className="dot">●</span>&nbsp;GMT+5:30</span>
          </div>

          <h1 className="hero__name">
            Sha<span className="tip" data-tip="it's 'sh', not 's'. Yes, there are two sh(s)"><em>sh</em></span>wat
            <span className="sub">- senior product engineer · educator · person on the internet.</span>
          </h1>

          <div className="hero__cursorline">
            <span className="prompt">~/portfolio $</span>
            <span>6+ years shipping high-scale systems in React, TypeScript & Node - 100M+ users served.<span className="pipe"> |</span><span className="cursor" aria-hidden="true" /></span>
          </div>

          <a
            className="hero__avail"
            href="https://calendly.com/sbagaria2710/discovery-call-shashwat"
            target="_blank"
            rel="noopener noreferrer"
            data-cta="hero_calendly"
          >
            <span className="hero__avail__dot" aria-hidden="true" />
            <span className="hero__avail__label">Open to interesting conversations</span>
            <span className="hero__avail__sep" aria-hidden="true">·</span>
            <span className="hero__avail__cta">book a 15-min call →</span>
          </a>

          <dl className="hero__stats">
            <div><dt>Experience</dt><dd>6+ yrs<small>in production systems</small></dd></div>
            <div><dt>Companies</dt><dd>3+<small>Deel · JioHotstar · Cars24</small></dd></div>
            <div><dt>Stack</dt><dd>React / TS<small>+ Node · Vite · System Design</small></dd></div>
            <div><dt>Location</dt><dd>Remote<small>Lucknow, India · GMT+5:30</small></dd></div>
          </dl>

          <nav className="hero__socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/shashwat-bagaria/" target="_blank" rel="noopener noreferrer" data-cta="hero_linkedin">LinkedIn</a>
            <span className="hero__socials__sep" aria-hidden="true">·</span>
            <a href="https://x.com/SBagaria2710" target="_blank" rel="noopener noreferrer" data-cta="hero_twitter">X / Twitter</a>
            <span className="hero__socials__sep" aria-hidden="true">·</span>
            <a href="https://drive.google.com/file/d/16FIIgO47FStMRIyDDHqm2mvyS33dBrHY/view?usp=sharing" target="_blank" rel="noopener noreferrer" data-cta="hero_resume">Resume ↗</a>
          </nav>
        </div>
      </div>
    </>
  );
}
