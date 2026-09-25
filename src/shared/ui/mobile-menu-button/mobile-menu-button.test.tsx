// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MobileMenuButton } from './mobile-menu-button';

afterEach(() => {
  cleanup();
});

describe('Кнопка мобильного меню', () => {
  it('отображает закрытое состояние', () => {
    render(<MobileMenuButton open={false} controls="mobile-navigation" />);
    const button = screen.getByRole('button', { name: 'Открыть меню' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'mobile-navigation');
  });

  it('отображает открытое состояние', () => {
    render(<MobileMenuButton open controls="mobile-navigation" />);
    expect(screen.getByRole('button', { name: 'Закрыть меню' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('вызывает onClick при нажатии', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<MobileMenuButton open={false} controls="mobile-navigation" onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Открыть меню' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('поддерживает клавиатурное управление', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<MobileMenuButton open={false} controls="mobile-navigation" onClick={onClick} />);
    const button = screen.getByRole('button', { name: 'Открыть меню' });
    button.focus();
    expect(button).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('пробрасывает className и дополнительные атрибуты', () => {
    render(
      <MobileMenuButton
        open={false}
        controls="mobile-navigation"
        className="custom"
        data-testid="menu-button"
      />,
    );
    expect(screen.getByTestId('menu-button')).toHaveClass('custom');
  });
});
