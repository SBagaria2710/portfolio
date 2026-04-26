import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="ext" aria-hidden="true">↗</span>
    </a>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Work</h2>
          <p className="section-kicker">where I've been & what I built there</p>
        </div>

        <ul className="roles">

          <li className="role reveal">
            <div className="role__sigil">D<small>SSE</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://www.deel.com">Deel</ExternalLink></h3>
              <p className="role__title">Senior Software Engineer</p>
            </div>
            <div className="role__years"><b>Sep 2025 — Present</b>Remote</div>
            <p className="role__summary">
              Building the future of global HR infrastructure — starting with making equipment management
              not a nightmare for 1000+ organisations worldwide.
            </p>
            <ul className="role__bullets">
              <li>Sunset the legacy equipment flow and helped migrate <b>1000+ organisations</b> to the new DeelIT flow.</li>
              <li>Built the <b>Mobile Device Management</b> Self-Serve flow and integrated DeelIT into the Offboarding Flow.</li>
              <li>Built a <b>centralised analytics package</b> for all DeelIT events across the platform.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">TypeScript</span>
              <span className="chip">Nx</span><span className="chip">NodeJS</span><span className="chip">Vite</span>
            </div>
          </li>

          <li className="role reveal">
            <div className="role__sigil">J<small>SSDE 1</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://www.hotstar.com">JioHotstar</ExternalLink></h3>
              <p className="role__title">Senior SDE 1</p>
            </div>
            <div className="role__years"><b>Apr 2024 — Sep 2025</b>Bengaluru</div>
            <p className="role__summary">
              Owned high-stakes web features across IPL, Olympics, and Elections — the kind of events where
              anything going wrong means 300M people notice immediately.
            </p>
            <ul className="role__bullets">
              <li>Delivered the <b>voting day feature</b> used by 100K+ users in just 2 days, immediately post-IPL.</li>
              <li>Developed match summary cards driving <b>27M clicks</b> across cricket and football fixtures.</li>
              <li>Co-led design and development of the CFE platform for user-generated content submissions.</li>
              <li>Integrated Ads SDK during Olympics, achieving <b>41M impressions</b>, and maintained it solely thereafter.</li>
              <li>Owned migration of critical <b>IPL 2025 web-views</b> to Hotstar post JioCinema merger.</li>
              <li>Decommissioned <b>34 legacy services</b>, reducing technical debt significantly.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">ReduxJS</span>
              <span className="chip">NodeJS</span><span className="chip">JavaScript</span>
              <span className="chip">Vite</span><span className="chip">System Design</span>
            </div>
          </li>

          <li className="role reveal">
            <div className="role__sigil">J<small>SDE 2</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://www.jiocinema.com">JioCinema</ExternalLink></h3>
              <p className="role__title">Software Development Engineer 2</p>
            </div>
            <div className="role__years"><b>Sep 2023 — Apr 2024</b>Bengaluru</div>
            <p className="role__summary">
              Launched revenue-generating features and rebuilt core infrastructure at one of India's largest
              streaming platforms — 300M+ interactions in a single month.
            </p>
            <ul className="role__bullets">
              <li>Launched a feature generating <b>INR ~10M sales</b> and &gt;300M interactions in 1 month — pioneering non-ad revenue.</li>
              <li>Reduced peak RPS for sticker images by <b>98.76%</b> (1.7M → 21K) via optimised image loading.</li>
              <li>Implemented <b>CTV QR login</b> flow enabling seamless login across connected TVs under urgent timelines.</li>
              <li>Built the Moses dashboard for video/shorts ingestion and user management.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">ReduxJS</span>
              <span className="chip">NodeJS</span><span className="chip">Sentry</span><span className="chip">WCAG AA</span>
            </div>
          </li>

          <li className="role reveal">
            <div className="role__sigil">C<small>FE Dev</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://www.cars24.com">Cars24</ExternalLink></h3>
              <p className="role__title">Frontend Developer</p>
            </div>
            <div className="role__years"><b>Sep 2021 — Aug 2023</b>Bengaluru</div>
            <p className="role__summary">
              Owned the M-Web experience end-to-end: from core web vitals to the full post-booking journey
              across mobile and app.
            </p>
            <ul className="role__bullets">
              <li>Improved M-Web performance score by <b>~88%</b> (36 → 68) and passed all Core Web Vitals.</li>
              <li>Ran <b>20+ A/B experiments</b> to increase engagement, reduce bounce rates, and improve conversions.</li>
              <li>Built the post-booking flow from scratch covering Test Drive, Token Payment, Value Added Services, Final Payment, Delivery, and Post-Delivery.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">ReduxJS</span>
              <span className="chip">JavaScript</span><span className="chip">Webpack</span>
              <span className="chip">HTML</span><span className="chip">CSS</span>
            </div>
          </li>

          <li className="role reveal">
            <div className="role__sigil">T<small>SWE</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://talent500.co">Talent500</ExternalLink></h3>
              <p className="role__title">Software Engineer — Web (Contract)</p>
            </div>
            <div className="role__years"><b>Apr 2021 — Sep 2021</b>Remote</div>
            <p className="role__summary">
              Owned critical booking features and led multiple third-party integrations across a fintech platform.
            </p>
            <ul className="role__bullets">
              <li>Built Multiple Bookings, Split Payments, Value Added Services, and MRL flow.</li>
              <li>Took ownership for building the <b>feedback flow (NPS)</b> on frontend from scratch.</li>
              <li>Led integrations with CBD, PolicyBazaar, DAPI, Branch, CleverTap, and MessageBird.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">JavaScript</span>
            </div>
          </li>

          <li className="role reveal">
            <div className="role__sigil">S<small>FE</small></div>
            <div className="role__head">
              <h3 className="role__company"><ExternalLink href="https://sequoia.com">Sequoia Consulting</ExternalLink></h3>
              <p className="role__title">Frontend Engineer</p>
            </div>
            <div className="role__years"><b>Aug 2019 — Apr 2021</b>Bengaluru</div>
            <p className="role__summary">
              First engineering role — learned the craft of building production-grade React applications
              with a lean, experienced team.
            </p>
            <ul className="role__bullets">
              <li>Built and maintained frontend features across client projects using React, Redux, and Cypress.</li>
              <li>Took internal sessions on Web performance and CSS.</li>
            </ul>
            <div className="role__stack">
              <span className="k">Stack</span>
              <span className="chip">ReactJS</span><span className="chip">ReduxJS</span>
              <span className="chip">Styled Components</span><span className="chip">Webpack</span><span className="chip">Cypress</span>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
