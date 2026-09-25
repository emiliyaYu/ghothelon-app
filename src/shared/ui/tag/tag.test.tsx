// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Tag } from './tag';

afterEach(() => {
  cleanup();
});

describe('Тег', () => {
  it('без href рендерится как обычный текст с содержимым', () => {
    render(<Tag>История</Tag>);
    expect(screen.getByText('История')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('с href рендерится как ссылка с нужным адресом', () => {
    render(<Tag href="/tags/history">История</Tag>);
    const link = screen.getByRole('link', { name: 'История' });
    expect(link).toHaveAttribute('href', '/tags/history');
  });

  it('по умолчанию не имеет активного класса', () => {
    render(<Tag>Обычный</Tag>);
    expect(screen.getByText('Обычный').className).not.toMatch(/active/);
  });

  it('добавляет активный класс при active', () => {
    render(<Tag active>Выбран</Tag>);
    expect(screen.getByText('Выбран').className).toMatch(/active/);
  });

  it('вызывает onClick при нажатии на ссылку', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Tag href="/tags/history" onClick={onClick}>
        История
      </Tag>,
    );
    await user.click(screen.getByRole('link', { name: 'История' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(<Tag className="custom">Класс</Tag>);
    expect(screen.getByText('Класс')).toHaveClass('custom');
  });
});
