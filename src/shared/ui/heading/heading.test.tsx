// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Heading } from './heading';

afterEach(() => {
  cleanup();
});

describe('Заголовок', () => {
  it('рендерится как h1 с переданным текстом', () => {
    render(<Heading>Забытые знания</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Забытые знания' })).toBeInTheDocument();
  });

  it('по умолчанию использует размер xl', () => {
    render(<Heading>По умолчанию</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'По умолчанию' }).className).toMatch(
      /sizeXl/,
    );
  });

  it('применяет выбранный размер', () => {
    render(<Heading size="s">Маленький</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Маленький' }).className).toMatch(/sizeS/);
  });

  it('не задаёт цветовой класс по умолчанию', () => {
    render(<Heading>Без цвета</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Без цвета' }).className).not.toMatch(
      /color/,
    );
  });

  it('применяет выбранный цвет из токенов', () => {
    render(<Heading color="accent">Акцент</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Акцент' }).className).toMatch(
      /colorAccent/,
    );
  });

  it('по умолчанию не задаёт курсивное начертание', () => {
    render(<Heading>Прямое</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Прямое' }).className).not.toMatch(
      /italic/,
    );
  });

  it('применяет курсивное начертание при italic', () => {
    render(<Heading italic>Курсив</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Курсив' }).className).toMatch(/italic/);
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(<Heading className="custom">С классом</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'С классом' })).toHaveClass('custom');
  });

  it('пробрасывает произвольные атрибуты заголовка', () => {
    render(<Heading id="page-title">С атрибутом</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'С атрибутом' })).toHaveAttribute(
      'id',
      'page-title',
    );
  });
});
