import { Link } from 'react-router-dom';
import { POSTS } from '../../data/posts';

export default function Writing() {
  return (
    <section id="writing">
      <div className="frame">
        <div className="section-head reveal">
          <span className="section-num">06</span>
          <h2 className="section-title">Writing</h2>
          <p className="section-kicker">words I wrote on purpose</p>
        </div>

        <ul className="posts">
          {POSTS.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-card reveal">
                <div className="stamp">
                  <b>{post.date.split(' ')[0]}</b>
                  {post.date.split(' ')[1]}
                </div>
                <div>
                  <h3>{post.title}</h3>
                  <p className="meta">{post.minutes} min read &nbsp;·&nbsp; {post.stamp}</p>
                </div>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="all-posts-link reveal">
          <Link to="/blog">All posts →</Link>
        </p>
      </div>
    </section>
  );
}
