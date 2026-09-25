// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { Navigation } from './navigation';

afterEach(() => {
  cleanup();
});

describe('Навигация', () => {
  it('отображает рабочие ссылки на карту и энциклопедию', () => {
    render(
      <MemoryRouter initialEntries={['/map']}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Карта' })).toHaveAttribute('href', '/map');
    expect(screen.getByRole('link', { name: 'Энциклопедия' })).toHaveAttribute(
      'href',
      '/encyclopedia',
    );
    expect(screen.getByRole('link', { name: 'Карта' })).toHaveAttribute('aria-current', 'page');
  });

  it('показывает недоступные разделы текстом без ссылок', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    for (const label of ['Словарь', 'Хроники', 'Предания']) {
      const item = screen.getByText(label);
      expect(item).toHaveAttribute('aria-disabled', 'true');
      expect(item.closest('a')).toBeNull();
    }
  });
});
