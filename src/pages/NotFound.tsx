import { Link } from 'react-router-dom';
import { useTabTitle } from '../hooks/useTabTitle';

export default function NotFound() {
  useTabTitle('404 — Shashwat');

  return (
    <div className="not-found-body">
      <div className="not-found-wrap">
        <p className="not-found-stamp"><span className="num">404</span> · Page Not Found</p>
        <h1>This page does not exist, much like a balanced binary tree in production.</h1>
        <p>
          Whatever you were looking for isn't here. It may have moved, been deleted, or
          never existed in the first place — like most of my TODO comments.
        </p>
        <p className="soft">
          If you followed a link from somewhere, it's probably my fault.
          If you typed the URL yourself, that's on you.
        </p>

        <div className="train">
          <span>
            error 404 &nbsp;·&nbsp; page not found &nbsp;·&nbsp; this is not the page you're looking for &nbsp;·&nbsp;
            you shall not pass &nbsp;·&nbsp; error 404 &nbsp;·&nbsp; page not found &nbsp;·&nbsp;
            this is not the page you're looking for &nbsp;·&nbsp; you shall not pass &nbsp;·&nbsp;
          </span>
        </div>

        <Link to="/" className="back">← Back to the homepage</Link>
      </div>
    </div>
  );
}
