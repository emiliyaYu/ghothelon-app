// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MapPinIcon } from '@/shared/icons';
import { Button } from './button';

afterEach(() => {
  cleanup();
});

describe('Кнопка', () => {
  it('отображает подпись', () => {
    render(<Button>Открыть карту</Button>);
    expect(screen.getByRole('button', { name: 'Открыть карту' })).toBeInTheDocument();
  });

  it('по умолчанию имеет type="button", чтобы не отправлять форму случайно', () => {
    render(<Button>Сохранить</Button>);
    expect(screen.getByRole('button', { name: 'Сохранить' })).toHaveAttribute('type', 'button');
  });

  it('пробрасывает явно заданный type', () => {
    render(<Button type="submit">Отправить</Button>);
    expect(screen.getByRole('button', { name: 'Отправить' })).toHaveAttribute('type', 'submit');
  });

  it('вызывает onClick при нажатии', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Клик</Button>);
    await user.click(screen.getByRole('button', { name: 'Клик' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('не вызывает onClick, когда кнопка отключена', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Недоступно
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Недоступно' });
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('отображает декоративную иконку, скрытую от скринридеров', () => {
    render(<Button icon={<MapPinIcon />}>Исследовать</Button>);
    const button = screen.getByRole('button', { name: 'Исследовать' });
    const icon = button.querySelector('svg');
    expect(icon).not.toBeNull();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('без иконки по умолчанию не рендерит svg', () => {
    render(<Button>Без иконки</Button>);
    expect(screen.getByRole('button', { name: 'Без иконки' }).querySelector('svg')).toBeNull();
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(<Button className="custom">Класс</Button>);
    expect(screen.getByRole('button', { name: 'Класс' })).toHaveClass('custom');
  });

  it('пробрасывает произвольные атрибуты кнопки', () => {
    render(<Button aria-label="Пометка">×</Button>);
    expect(screen.getByRole('button', { name: 'Пометка' })).toBeInTheDocument();
  });
});
