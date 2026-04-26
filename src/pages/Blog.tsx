import { Link } from 'react-router-dom';
import { useTabTitle } from '../hooks/useTabTitle';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { POSTS } from '../data/posts';
import type { Post } from '../data/posts';

const STAMP_CLASS: Record<Post['stamp'], string> = {
  DRAFT: 'pill--draft',
  WIP: 'pill--wip',
  LIVE: '',
};

export default function Blog() {
  useTabTitle('Writing — Shashwat');
  useScrollReveal();

  return (
    <>
      <Ticker speed={40}>
        <span>writing</span><span className="glyph">✦</span>
        <span>notes from the trenches</span><span className="glyph">✦</span>
        <span>occasional opinions</span><span className="glyph">✦</span>
        <span>written by hand, mostly</span><span className="glyph">✦</span>
        <span>writing</span><span className="glyph">✦</span>
        <span>notes from the trenches</span><span className="glyph">✦</span>
        <span>occasional opinions</span><span className="glyph">✦</span>
        <span>written by hand, mostly</span><span className="glyph">✦</span>
      </Ticker>

      <div className="frame">
        <nav className="topbar reveal">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Writing</span>
          </div>
          <span>shashwat.dev / writing</span>
        </nav>

        <div className="masthead">
          <p className="kicker">words, occasionally</p>
          <h1>Wri<em>ting</em></h1>
          <p className="lede">Notes on engineering, systems, and the things nobody tells you in the job description.</p>
          <div className="stats">
            <div>Posts<b>{POSTS.length}</b></div>
            <div>Status<b>Mostly drafts</b></div>
            <div>Topics<b>Frontend · Systems · Misc</b></div>
          </div>
        </div>

        <div className="index-head reveal">
          <span className="num">All</span>
          <h2>Posts</h2>
        </div>

        <ul className="posts-list">
          {POSTS.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-card-full reveal">
                <div className="stamp">
                  <b>{post.date.split(' ')[0]}</b>
                  {post.date.split(' ')[1]}
                </div>
                <div>
                  <h3>{post.title}</h3>
                  <p className="dek">{post.dek}</p>
                  <p className="meta">
                    <span className={`pill ${STAMP_CLASS[post.stamp]}`}>{post.stamp}</span>
                    {post.minutes} min read
                  </p>
                </div>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="note reveal">
          These are working drafts. I publish when I have something worth saying, not on a schedule.
          If something here resonates (or is wrong), write to me.
        </div>

        <Footer
          heading="Found something here you'd like to argue with?"
          intro="Good. Send me a note. I'll either change my mind or explain why I'm right. Either way, it'll be a better conversation than the reply section ever was."
          showSoot={false}
        />
      </div>
    </>
  );
}
