import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [],
  server: {
    open: true,
    // На Windows (особенно на несистемных дисках вроде F:) нативный вотчер
    // Vite пропускает создание новых файлов, поэтому новые *.stories.tsx
    // подхватываются только после перезапуска. Polling это исправляет.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url)),
    },
  },
});
