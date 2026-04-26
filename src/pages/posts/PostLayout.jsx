import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Ticker from '../../components/Ticker';
import Footer from '../../components/Footer';
import { POSTS } from '../../data/posts';

const STAMP_CLASS = { DRAFT: 'pill--draft', WIP: 'pill--wip' };

export default function PostLayout({ slug, children }) {
  useScrollReveal();

  const idx  = POSTS.findIndex(p => p.slug === slug);
  const post = POSTS[idx];
  const prev = POSTS[idx + 1] || null;
  const next = POSTS[idx - 1] || null;

  if (!post) return null;

  return (
    <>
      <Ticker speed={44}>
        <span>{post.title}</span><span className="glyph">✦</span>
        <span>by shashwat</span><span className="glyph">✦</span>
        <span>{post.minutes} min read</span><span className="glyph">✦</span>
        <span>{post.date}</span><span className="glyph">✦</span>
        <span>{post.title}</span><span className="glyph">✦</span>
        <span>by shashwat</span><span className="glyph">✦</span>
        <span>{post.minutes} min read</span><span className="glyph">✦</span>
        <span>{post.date}</span><span className="glyph">✦</span>
      </Ticker>

      <div className="frame">
        <nav className="topbar">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/blog">Writing</Link>
            <span>›</span>
            <span>{post.title.substring(0, 40)}{post.title.length > 40 ? '…' : ''}</span>
          </div>
          <span>{post.date} &nbsp;·&nbsp; {post.minutes} min</span>
        </nav>

        <header className="post-head">
          <div className="meta">
            <span className={`pill ${STAMP_CLASS[post.stamp] || ''}`}>{post.stamp}</span>
            <span className="dot">·</span>
            <span>{post.minutes} min read</span>
            <span className="dot">·</span>
            <span>{post.date}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="standfirst">{post.dek}</p>
          <p className="byline">By <b>Shashwat Bagaria</b> · {post.date}</p>
        </header>

        <article className="post-body">
          {children}
        </article>

        <nav className="post-foot">
          {prev ? (
            <Link to={`/blog/${prev.slug}`}>
              <span className="lab">← Previous</span>
              <span className="ttl">{prev.title}</span>
            </Link>
          ) : (
            <span className="empty">
              <span className="lab">← Previous</span>
              <span className="ttl">No older posts</span>
            </span>
          )}
          {next ? (
            <Link to={`/blog/${next.slug}`} className="next">
              <span className="lab">Next →</span>
              <span className="ttl">{next.title}</span>
            </Link>
          ) : (
            <span className="empty next">
              <span className="lab">Next →</span>
              <span className="ttl">No newer posts</span>
            </span>
          )}
        </nav>

        <p className="back-link"><Link to="/blog">← All writing</Link></p>

        <Footer
          heading="Found something here you'd like to argue with?"
          intro="Good. Send me a note. I'll either change my mind or explain why I'm right."
          showSoot={false}
        />
      </div>
    </>
  );
}
