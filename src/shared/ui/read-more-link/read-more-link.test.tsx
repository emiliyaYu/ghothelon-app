// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ReadMoreLink } from './read-more-link';

afterEach(() => {
  cleanup();
});

describe('Ссылка «Читать статью»', () => {
  it('по умолчанию отображает подпись «Читать статью»', () => {
    render(<ReadMoreLink href="/article" />);
    expect(screen.getByRole('link', { name: /читать статью/i })).toBeInTheDocument();
  });

  it('отображает пользовательскую подпись', () => {
    render(<ReadMoreLink href="/article">Подробнее</ReadMoreLink>);
    expect(screen.getByRole('link', { name: /подробнее/i })).toBeInTheDocument();
  });

  it('ведёт по указанному адресу', () => {
    render(<ReadMoreLink href="/encyclopedia/velor" />);
    expect(screen.getByRole('link', { name: /читать статью/i })).toHaveAttribute(
      'href',
      '/encyclopedia/velor',
    );
  });

  it('отображает декоративную иконку-стрелку, скрытую от скринридеров', () => {
    render(<ReadMoreLink href="/article" />);
    const link = screen.getByRole('link', { name: /читать статью/i });
    const icon = link.querySelector('svg');
    expect(icon).not.toBeNull();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('вызывает onClick при нажатии', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <ReadMoreLink href="/article" onClick={onClick}>
        Читать статью
      </ReadMoreLink>,
    );
    await user.click(screen.getByRole('link', { name: /читать статью/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(
      <ReadMoreLink href="/article" className="custom">
        Читать статью
      </ReadMoreLink>,
    );
    expect(screen.getByRole('link', { name: /читать статью/i })).toHaveClass('custom');
  });

  it('пробрасывает произвольные атрибуты ссылки', () => {
    render(
      <ReadMoreLink href="/article" target="_blank" rel="noreferrer">
        Читать статью
      </ReadMoreLink>,
    );
    const link = screen.getByRole('link', { name: /читать статью/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});
