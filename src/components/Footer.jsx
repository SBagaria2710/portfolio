export default function Footer({
  heading = 'Say hello, or just say something.',
  intro = 'I read every email. I reply to most. The fastest way to reach me is below — though if you spell “mellon” on this page, a door opens.',
  showSoot = false,
}) {
  return (
    <footer className="reveal">
      <div className="foot-grid">
        <div>
          <h2 className="foot-h">{heading}</h2>
          <p className="foot-p">{intro}</p>
          <nav className="foot-links" aria-label="Elsewhere">
            <a href="mailto:shashwawtforwork@gmail.com">email</a><span className="dot">●</span>
            <a href="https://github.com/shashwatb" target="_blank" rel="noopener noreferrer">github</a><span className="dot">●</span>
            <a href="https://linkedin.com/in/shashwatb" target="_blank" rel="noopener noreferrer">linkedin</a><span className="dot">●</span>
            <a href="https://twitter.com/shashwatb" target="_blank" rel="noopener noreferrer">twitter</a><span className="dot">●</span>
            <a href="https://codepen.io/shashwatb" target="_blank" rel="noopener noreferrer">codepen</a><span className="dot">●</span>
            <a href="https://letterboxd.com/shashwatb" target="_blank" rel="noopener noreferrer">letterboxd</a><span className="dot">●</span>
            <a href="https://linktr.ee/shashwatb" target="_blank" rel="noopener noreferrer">linktree</a>
          </nav>
        </div>
        <div>
          <p className="foot-p" style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: '22px', color: 'var(--ink)', lineHeight: 1.4 }}>
            &ldquo;<span style={{ color: 'var(--ink-2)' }}>// TODO:</span> a one-line credit or quote you actually like.&rdquo;
          </p>
          <p className="foot-credit">© 2026 · built by hand · no frameworks were harmed</p>
        </div>
      </div>

      <div className="marauder" aria-hidden="true">
        <span>I solemnly swear that I am up to no good &nbsp;◆&nbsp; valar morghulis &nbsp;◆&nbsp; this is the way &nbsp;◆&nbsp; with great power, comes great responsibility &nbsp;◆&nbsp; could I BE more on time? &nbsp;◆&nbsp; pivot! pivot! pivot! &nbsp;◆&nbsp; mischief managed</span>
      </div>

      {showSoot && <span className="soot" aria-hidden="true" />}
    </footer>
  );
}
