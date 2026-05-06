import ScrollToTop from './components/ScrollToTop';
import Whisper from './components/Whisper';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

interface AppProps {
  url?: string;
}

function pickPage(url: string) {
  const path = url.split('?')[0].split('#')[0];
  if (path === '/' || path === '') return <Home />;
  return <NotFound />;
}

export default function App({ url = '/' }: AppProps) {
  return (
    <div>
      <ScrollToTop />
      <Whisper />
      {pickPage(url)}
    </div>
  );
}
