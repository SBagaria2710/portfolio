import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ['module', 'browser', 'node', 'import', 'default'],
  },
  ssr: {
    resolve: {
      conditions: ['node', 'import', 'module', 'default'],
    },
    noExternal: ['react-router', 'react-router-dom'],
  },
});
