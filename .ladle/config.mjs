/** @type {import('@ladle/react').UserConfig} */
import path from 'path';

export default {
  viteConfig: path.join(process.cwd(), '.ladle', 'vite.ladle.config.ts'),
  // Автоматически открывать каталог компонентов в новой вкладке браузера.
  // Возможные значения: 'tab' | 'window' | 'cross-tab' | 'none'.
  open: 'tab',
  // Тёмная тема интерфейса Ladle по умолчанию.
  darkMode: {
    default: 'dark',
  },
  addons: {
    theme: {
      enabled: true,
      defaultState: 'dark',
    },
  },
};
