import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root') as HTMLElement;
const app = <App url={window.location.pathname} />;

if (import.meta.env.DEV) {
  createRoot(root).render(app);
} else {
  hydrateRoot(root, app);
}
