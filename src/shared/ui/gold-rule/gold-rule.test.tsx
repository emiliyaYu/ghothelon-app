// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { GoldRule } from './gold-rule';

afterEach(() => {
  cleanup();
});

describe('Золотая линия', () => {
  it('рендерится как разделитель', () => {
    render(<GoldRule />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('объединяет пользовательский className со своими классами', () => {
    render(<GoldRule className="custom" />);
    expect(screen.getByRole('separator')).toHaveClass('custom');
  });

  it('пробрасывает произвольные атрибуты', () => {
    render(<GoldRule aria-label="Раздел" />);
    expect(screen.getByRole('separator', { name: 'Раздел' })).toBeInTheDocument();
  });
});
