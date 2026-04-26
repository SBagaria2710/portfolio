export default function Teaching() {
  return (
    <section id="teaching">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">Teaching</h2>
          <p className="section-kicker">paying it forward, every week</p>
        </div>

        <div className="teaching-intro reveal">
          <div className="teaching-intro__text">
            <p>
              Beyond shipping product, I spend time every week teaching the engineers who are just getting started —
              the ones figuring out web, wrestling with system design interviews, and wondering if they'll ever
              feel like they know what they're doing. (Spoiler: you will. Sort of.)
            </p>
            <p>
              I've been a part of <strong>Team Shiksha</strong> as an educator and community moderator — running
              occasional sessions, answering the same five questions about closures with genuine enthusiasm, and
              trying to make advanced topics feel approachable rather than terrifying.
            </p>
          </div>
        </div>

        <div className="sessions reveal">
          <div className="session-card">
            <p className="session-card__cadence">Every Sunday</p>
            <h3>Frontend Deep Dive</h3>
            <p>
              A structured weekly session covering the fundamentals and internals of frontend development —
              how the browser works, React under the hood, performance patterns, and the things that trip
              people up in interviews and in production.
            </p>
          </div>

          <div className="session-card session-card--alt">
            <p className="session-card__cadence">Every Friday</p>
            <h3>System Design Sessions</h3>
            <p>
              Breaking down real-world system design problems — URL shorteners, live scoreboards, notification
              systems — with an emphasis on trade-offs, not textbook answers. The kind of sessions I wish
              I'd had when I was starting out.
            </p>
          </div>
        </div>

        <div className="teaching-note reveal">
          <span className="teaching-note__label">Also</span>
          Moderate and manage the community day-to-day — answering questions, facilitating discussions,
          and keeping the space one where it's safe to not know things yet.
        </div>
      </div>
    </section>
  );
}
