// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TargetIcon } from '@/shared/icons';
import { SectionCard } from './section-card';

afterEach(() => {
  cleanup();
});

describe('Карточка раздела', () => {
  it('отображает заголовок и описание', () => {
    render(<SectionCard title="Энциклопедия" description="4 200 статей" />);
    const card = screen.getByRole('button', { name: /энциклопедия/i });
    expect(card).toBeInTheDocument();
    expect(screen.getByText('4 200 статей')).toBeInTheDocument();
  });

  it('по умолчанию имеет type="button"', () => {
    render(<SectionCard title="Словарь" description="800 терминов" />);
    expect(screen.getByRole('button', { name: /словарь/i })).toHaveAttribute('type', 'button');
  });

  it('пробрасывает явно заданный type', () => {
    render(<SectionCard title="Хроники" description="312 событий" type="submit" />);
    expect(screen.getByRole('button', { name: /хроники/i })).toHaveAttribute('type', 'submit');
  });

  it('вызывает onClick при нажатии', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<SectionCard title="Предания" description="94 документа" onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: /предания/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('не вызывает onClick, когда карточка отключена', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<SectionCard title="Раздел" description="Недоступен" disabled onClick={onClick} />);
    const card = screen.getByRole('button', { name: /раздел/i });
    expect(card).toBeDisabled();
    await user.click(card);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('отображает декоративную иконку, скрытую от скринридеров', () => {
    render(<SectionCard title="Энциклопедия" description="4 200 статей" icon={<TargetIcon />} />);
    const card = screen.getByRole('button', { name: /энциклопедия/i });
    const icon = card.querySelector('svg');
    expect(icon).not.toBeNull();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('без иконки по умолчанию не рендерит svg', () => {
    render(<SectionCard title="Раздел" description="Без иконки" />);
    expect(screen.getByRole('button', { name: /раздел/i }).querySelector('svg')).toBeNull();
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(<SectionCard title="Раздел" description="Описание" className="custom" />);
    expect(screen.getByRole('button', { name: /раздел/i })).toHaveClass('custom');
  });

  it('пробрасывает произвольные атрибуты кнопки', () => {
    render(<SectionCard title="Раздел" description="Описание" aria-label="Перейти в раздел" />);
    expect(screen.getByRole('button', { name: 'Перейти в раздел' })).toBeInTheDocument();
  });

  it('поддерживает навигацию с клавиатуры', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<SectionCard title="Энциклопедия" description="4 200 статей" onClick={onClick} />);
    const card = screen.getByRole('button', { name: /энциклопедия/i });
    card.focus();
    expect(card).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
