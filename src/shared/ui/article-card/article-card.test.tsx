// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ArticleCard } from './article-card';

afterEach(() => {
  cleanup();
});

describe('Карточка статьи', () => {
  it('отображает тег, заголовок, подзаголовок и описание', () => {
    render(
      <ArticleCard
        tag="Дракон"
        title="Вэлор Алый"
        subtitle="Владыка Пепла"
        description="Старейший из живых драконов."
        href="/encyclopedia/velor"
      />,
    );
    expect(screen.getByText('Дракон')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Вэлор Алый' })).toBeInTheDocument();
    expect(screen.getByText('Владыка Пепла')).toBeInTheDocument();
    expect(screen.getByText('Старейший из живых драконов.')).toBeInTheDocument();
  });

  it('отображает заголовок на уровне h3', () => {
    render(<ArticleCard tag="Дракон" title="Вэлор Алый" description="Описание" href="/velor" />);
    expect(screen.getByRole('heading', { level: 3, name: 'Вэлор Алый' })).toBeInTheDocument();
  });

  it('по умолчанию показывает ссылку «Читать статью» с адресом статьи', () => {
    render(<ArticleCard tag="Дракон" title="Вэлор Алый" description="Описание" href="/velor" />);
    expect(screen.getByRole('link', { name: /читать статью/i })).toHaveAttribute('href', '/velor');
  });

  it('позволяет переопределить подпись ссылки', () => {
    render(
      <ArticleCard
        tag="Дракон"
        title="Вэлор Алый"
        description="Описание"
        href="/velor"
        linkLabel="Подробнее"
      />,
    );
    expect(screen.getByRole('link', { name: /подробнее/i })).toBeInTheDocument();
  });

  it('не рендерит подзаголовок, если он не задан', () => {
    render(
      <ArticleCard tag="Событие" title="Падение" description="Описание события." href="/kate" />,
    );
    expect(screen.queryByText('Владыка Пепла')).not.toBeInTheDocument();
  });

  it('рендерится как семантический элемент article', () => {
    const { container } = render(
      <ArticleCard tag="Дракон" title="Вэлор Алый" description="Описание" href="/velor" />,
    );
    expect(container.querySelector('article')).not.toBeNull();
  });

  it('объединяет пользовательский className со своими классами', () => {
    const { container } = render(
      <ArticleCard
        tag="Дракон"
        title="Вэлор Алый"
        description="Описание"
        href="/velor"
        className="custom"
      />,
    );
    expect(container.querySelector('article')).toHaveClass('custom');
  });
});
