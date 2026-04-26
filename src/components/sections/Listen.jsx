export default function Listen() {
  return (
    <section id="listen">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">07</span>
          <h2 className="section-title">Listen</h2>
          <p className="section-kicker">what's on while I code</p>
        </div>

        <div className="listen reveal">
          <div className="vinyl" aria-hidden="true" />
          <div>
            <h3>Currently spinning</h3>
            <p>
              Phoebe Bridgers for focused work. Arooj Aftab when the deadline is tomorrow but the code is
              still broken. Occasionally the IPL commentary with the volume at 40%.
            </p>
            <a
              className="link"
              href="https://open.spotify.com/user/shashwatb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Spotify →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
