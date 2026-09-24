# Разработка

Руководство по локальной настройке, командам и принципам работы над проектом.
Документ дополняется по мере развития проекта.

## Требования

- Node.js 24 LTS
- npm 10+

Проверить версии:

```bash
node --version
npm --version
```

## Установка

```bash
npm install
```

`npm install` также инициализирует Git-хуки через скрипт `prepare` (Husky).

## Команды

| Команда                 | Назначение                                                     |
| ----------------------- | -------------------------------------------------------------- |
| `npm run dev`           | Запуск dev-сервера Vite                                        |
| `npm run build`         | Проверка типов и production-сборка                             |
| `npm run preview`       | Локальный просмотр production-сборки                           |
| `npm run typecheck`     | Проверка типов TypeScript                                      |
| `npm run lint`          | Проверка кода ESLint                                           |
| `npm run lint:fix`      | Проверка ESLint с автоисправлением                             |
| `npm run format`        | Форматирование файлов через Prettier                           |
| `npm run format:check`  | Проверка форматирования без изменений                          |
| `npm run test`          | Тесты в watch-режиме                                           |
| `npm run test:run`      | Однократный прогон тестов                                      |
| `npm run test:coverage` | Тесты с отчётом о покрытии                                     |
| `npm run quality`       | Полный прогон проверок (typecheck, lint, format, tests, build) |

## Псевдонимы импортов

Для импортов за пределами текущей папки используется alias `@`, указывающий на `src`:

```ts
import { Navigation } from '@/domains/navigation';
```

Относительные импорты внутри одной папки допустимы:

```ts
import './app-layout.css';
```

ESLint проверяет это правило и умеет исправлять импорты автоматически:

```bash
npm run lint:fix
```

## Стиль кода

- React-компоненты объявляются как стрелочные функции.
- Форматирование выполняет Prettier; спорные стилевые правила ESLint отключены.
- Соблюдаются правила доступности (`eslint-plugin-jsx-a11y`).
- Типы предпочтительнее runtime-проверок: `react/prop-types` отключён.

## Git-хуки

Хуки настроены через Husky и запускаются автоматически:

- **pre-commit** — проверка типов всего проекта и `lint-staged`
  (ESLint `--fix` и Prettier для изменённых файлов).
- **commit-msg** — проверка сообщения по формату Conventional Commits.

## Сообщения коммитов

Используется [Conventional Commits](https://www.conventionalcommits.org/):

```text
<тип>(<область>): <описание>
```

Допустимые типы: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`,
`ci`, `chore`, `perf`, `revert`.

Примеры:

```text
feat(map): добавить слой маркеров
fix(navigation): сохранять активный маршрут
docs: обновить руководство по разработке
```

## Ветки и Pull Request

- Прямой push в `main` запрещён; изменения вносятся через Pull Request.
- Перед merge должен успешно пройти CI (**Quality gates**).
- История `main` защищена от force push и удаления ветки.

## Непрерывная интеграция

GitHub Actions при push в `main` и в Pull Request последовательно выполняет:

```text
npm ci
npm run typecheck
npm run lint
npm run format:check
npm run test:run
npm run build
```

Локально те же проверки запускаются одной командой:

```bash
npm run quality
```
