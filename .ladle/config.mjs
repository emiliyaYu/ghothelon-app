/** @type {import('@ladle/react').UserConfig} */
import path from "path";

export default {
  viteConfig: path.join(process.cwd(), '.ladle', 'vite.ladle.config.ts'),
  // Автоматически открывать каталог компонентов в новой вкладке браузера.
  // Возможные значения: 'tab' | 'window' | 'cross-tab' | 'none'.
  open: 'tab',
  addons: {
    // Фоны для превью: тёмная «призрачная» кнопка плохо видна на белом.
    background: {
      enabled: true,
      defaultValue: '#1a1712',
      options: {
        night: '#1a1712',
        parchment: '#f8f5ef',
        white: '#ffffff',
      },
    },
  },
};
