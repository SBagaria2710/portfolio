import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <App url={window.location.pathname} />
);
