// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { Header } from './header';

afterEach(() => {
  cleanup();
});

describe('Шапка сайта', () => {
  it('отображает бренд и основную навигацию', () => {
    render(
      <MemoryRouter initialEntries={['/map']}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Гхотэлон: главная' })).toHaveAttribute(
      'href',
      '/main',
    );
    expect(screen.getByRole('navigation', { name: 'Основная навигация' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Карта' })).toHaveAttribute('href', '/map');
    expect(screen.getByRole('link', { name: 'Энциклопедия' })).toHaveAttribute(
      'href',
      '/encyclopedia',
    );
  });

  it('скрывает мобильную навигацию до открытия меню', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('navigation', { name: 'Основная навигация' })).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Открыть меню' })).toBeInTheDocument();
    expect(document.getElementById('mobile-navigation')).toHaveAttribute('hidden');
  });

  it('открывает мобильное меню и закрывает его по Escape', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menuButton = screen.getByRole('button', { name: 'Открыть меню' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await user.click(menuButton);
    expect(screen.getByRole('button', { name: 'Закрыть меню' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(
      screen.getAllByRole('navigation', { name: 'Основная навигация', hidden: true }),
    ).toHaveLength(2);
    expect(document.getElementById('mobile-navigation')).not.toHaveAttribute('hidden');

    await user.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Открыть меню' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(document.getElementById('mobile-navigation')).toHaveAttribute('hidden');
  });

  it('показывает будущие разделы как недоступные пункты', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    for (const label of ['Словарь', 'Хроники', 'Предания']) {
      expect(screen.getAllByText(label)[0]).toHaveAttribute('aria-disabled', 'true');
    }
  });
});
