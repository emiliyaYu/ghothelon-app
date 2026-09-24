import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/dist/**', '**/build/**', '**/coverage/**', '**/node_modules/**']),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: [
      '*.{js,mjs,cjs,ts,mts,cts}',
      '.ladle/**/*.{js,mjs,cjs,ts,tsx}',
      'src/test/**/*.{ts,tsx}',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Auto-fixable: rewrites relative imports into the @/ alias.
      // allowSameFolder keeps ./file imports within the same directory.
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'src', prefix: '@' },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/self-closing-comp': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript checks component props instead of runtime PropTypes.
      'react/prop-types': 'off',
    },
  },
  {
    // Story-файлы экспортируют не только компоненты (title, args и т.п.).
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  // Formatting is enforced by Prettier through format:check.
  prettier,
]);
