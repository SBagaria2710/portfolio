import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Whisper from './components/Whisper';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Blog = lazy(() => import('./pages/Blog'));
const TheCostOfAMigration = lazy(() => import('./pages/posts/TheCostOfAMigration'));
const WhatILearnedFromIPL = lazy(() => import('./pages/posts/WhatILearnedFromIPL'));
const OnDeletingThings = lazy(() => import('./pages/posts/OnDeletingThings'));

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Whisper />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/the-cost-of-a-migration" element={<TheCostOfAMigration />} />
          <Route path="/blog/what-i-learned-from-ipl" element={<WhatILearnedFromIPL />} />
          <Route path="/blog/on-deleting-things" element={<OnDeletingThings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
