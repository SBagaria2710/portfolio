import type { ReactNode } from 'react';

interface LinkProps { href: string; children: ReactNode; }

function IMDbLink({ href, children }: LinkProps) {
  return <a className="inline-ref" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function About() {
  return (
    <section id="about">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
          <p className="section-kicker">the person behind the terminal</p>
        </div>

        <div className="about">
          <p className="reveal">
            <span className="lead">F</span>ullstack engineer with 6+ years of experience crafting performant,
            scalable web applications. I've shipped features to hundreds of millions of users — from live cricket
            scoring during IPL to equipment management flows at Deel — and I care deeply about the craft behind each one.
          </p>

          <div className="quote-card reveal">
            <span className="qmark">"</span>
            <blockquote>
              Not all those who wander are lost. But some of them are debugging a race condition at 2 a.m.
            </blockquote>
            <cite>— Tolkien, probably, if he were an engineer</cite>
            <span className="stamp-todo">TODO: replace</span>
          </div>

          <p className="b reveal">
            Known for delivering under tight deadlines, leading cross-functional efforts, and owning features
            end-to-end. Outside work, you'll find me watching cricket, hosting the{' '}
            <a className="inline-ref" href="https://linktr.ee/shashwatb" target="_blank" rel="noopener noreferrer">
              Positive Shift podcast
            </a>
            , or teaching frontend and system design to the next batch of engineers who'll one day outship me.
          </p>

          <div className="pin-list reveal">
            <div className="pin">Location<b>Bengaluru, IN</b></div>
            <div className="pin">Education<b>B.Tech CS · Reva</b></div>
            <div className="pin">Pronouns<b>He / Him</b></div>
          </div>
        </div>

        <div className="currently reveal">
          <div className="currently__bar">
            <span>◉ Now</span>
            <span className="dots">● ● ●</span>
          </div>
          <div className="currently__body">
            <p className="currently__title">What I'm up to right now</p>
            <dl>
              <dt>Building</dt>
              <dd><span className="arrow">→</span>This portfolio website</dd>
              <dt>Watching</dt>
              <dd>
                <span className="arrow">→</span>
                <IMDbLink href="https://www.imdb.com/title/tt6741278/">Invincible</IMDbLink>
                {' · '}
                <IMDbLink href="https://www.imdb.com/title/tt1190634/">The Boys</IMDbLink>
              </dd>
              <dt>Reading</dt>
              <dd><span className="arrow">→</span>Autobiography of a Yogi</dd>
              <dt>Listening</dt>
              <dd>
                <span className="arrow">→</span>
                <a className="inline-ref inline-ref--gold" href="https://www.youtube.com/@PredictiveHistory" target="_blank" rel="noopener noreferrer">
                  Predictive History Sessions
                </a>
              </dd>
              <dt>Podcasting</dt>
              <dd>
                <span className="arrow">→</span>
                <a className="inline-ref inline-ref--gold" href="https://open.spotify.com/show/11XFJoppFmn2LGuSRYg5R1" target="_blank" rel="noopener noreferrer">
                  The Positive Shift · new episode soon
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
