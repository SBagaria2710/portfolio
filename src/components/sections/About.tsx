import type { ReactNode } from 'react';

interface LinkProps { href: string; children: ReactNode; }

function Link({ href, children }: LinkProps) {
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
            <span className="lead">S</span>enior Product Engineer with 6+ years of experience at the intersection
            of engineering and product thinking. I've shipped features to hundreds of millions of users - from live
            cricket scoring during IPL to equipment management flows at Deel - and I care as much about the why as the how.
          </p>

          <div className="quote-card reveal">
            <span className="qmark">"</span>
            <blockquote>
              The best code I ever wrote was the code I deleted. The second best was the code I never had to explain.
            </blockquote>
            <cite>- me, at some point between two deploys</cite>
          </div>

          <p className="b reveal">
            Known for delivering under tight deadlines, leading cross-functional efforts, and owning features
            end-to-end. Outside work, you'll find me watching movies, hosting{' '}
            <a className="inline-ref" href="https://open.spotify.com/show/11XFJoppFmn2LGuSRYg5R1" target="_blank" rel="noopener noreferrer">
              The Positive Shift podcast
            </a>
            , or teaching frontend and system design to the next batch of engineers who'll one day outship me.
          </p>

          <div className="pin-list reveal">
            <div className="pin">Location<b>Lucknow/Bengaluru, IN</b></div>
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
              <dd>
                <span className="arrow">→</span>
                <Link href="https://thebrightpause.com/">The Bright Pause</Link>
              </dd>
              <dt>Watching</dt>
              <dd>
                <span className="arrow">→</span>
                <Link href="https://www.imdb.com/title/tt36732944/">We are all trying here</Link>
              </dd>
              <dt>Reading</dt>
              <dd>
                <span className="arrow">→</span>
                <Link href="https://www.amazon.in/dp/0007547994">
                  Algorithms to Live By
                </Link>
              </dd>
              <dt>Listening</dt>
              <dd>
                <span className="arrow">→</span>
                <Link href="https://music.youtube.com/playlist?list=PLpKgtQCcjq7a5W-SoD1qsuxO_yDsvx0nd">
                  Chatpate Gaane
                </Link>
              </dd>
              <dt>Podcasting</dt>
              <dd>
                <span className="arrow">→</span>
                <Link href="https://open.spotify.com/show/11XFJoppFmn2LGuSRYg5R1">
                  The Positive Shift · new episode soon
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
