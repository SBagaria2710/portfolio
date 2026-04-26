import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Whisper from './components/Whisper';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import TheCostOfAMigration from './pages/posts/TheCostOfAMigration';
import WhatILearnedFromIPL from './pages/posts/WhatILearnedFromIPL';
import OnDeletingThings from './pages/posts/OnDeletingThings';

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Whisper />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/the-cost-of-a-migration" element={<TheCostOfAMigration />} />
        <Route path="/blog/what-i-learned-from-ipl" element={<WhatILearnedFromIPL />} />
        <Route path="/blog/on-deleting-things" element={<OnDeletingThings />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
