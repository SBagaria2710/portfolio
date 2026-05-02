export default function SideProjects() {
  return (
    <section id="projects">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Side Projects</h2>
          <p className="section-kicker">things I built because I couldn't stop thinking about them</p>
        </div>

        <div className="cards">
          <a className="card reveal" href="https://www.producthunt.com/products/tab-securer?launch=tab-securer" target="_blank" rel="noopener noreferrer">
            <span className="card__tag">Chrome Extension</span>
            <h3>Tab Securer ↗</h3>
            <p className="yr">2020</p>
            <p className="desc">Mark, hide, and show private browser tabs with one click. Built when screen sharing became the new normal during COVID — turns out people don't want their colleagues seeing everything.</p>
            <p className="stack"><span className="chip">JavaScript</span><span className="chip">Chrome APIs</span></p>
          </a>

          <div className="card card--alt reveal">
            <span className="card__tag">Self · 2020</span>
            <h3>Slurppy</h3>
            <p className="yr">NextJS · PWA · GraphQL · AWS</p>
            <p className="desc">Restaurant ordering app: browse the menu, place an order, track it — all from your seat. Built two apps (Slurppy Lens + Console) and onboarded 5 restaurants across Lucknow.</p>
            <p className="stack"><span className="chip">NextJS</span><span className="chip">TypeScript</span><span className="chip">GraphQL</span><span className="chip">AWS</span></p>
          </div>

          <a className="card reveal" href="https://wall-eth.vercel.app/" target="_blank" rel="noopener noreferrer">
            <span className="card__tag">Web3 · Experiment</span>
            <h3>Wall.eth ↗</h3>
            <p className="yr">2021</p>
            <p className="desc">A Web3 experiment to send crypto anywhere in the world. P2P wallet transfer using Solidity and MetaMask APIs — built to understand the stack from first principles.</p>
            <p className="stack"><span className="chip">Solidity</span><span className="chip">MetaMask API</span><span className="chip">React</span></p>
          </a>

          <a className="card reveal" href="https://open.spotify.com/show/11XFJoppFmn2LGuSRYg5R1" target="_blank" rel="noopener noreferrer">
            <span className="card__tag">Podcast</span>
            <h3>The Positive Shift ↗</h3>
            <p className="yr">Ongoing</p>
            <p className="desc">A podcast about people, mindset, and meaningful conversations. Something I do when I'm not writing code — or sometimes because I needed a break from writing code.</p>
            <p className="stack"><span className="chip">Anchor</span><span className="chip">Spotify</span></p>
          </a>
        </div>
      </div>
    </section>
  );
}
