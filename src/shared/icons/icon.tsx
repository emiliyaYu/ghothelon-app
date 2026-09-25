import type { ReactNode, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Размер иконки (ширина и высота). По умолчанию наследует размер текста. */
  size?: number | string;
}

interface IconBaseProps extends IconProps {
  children: ReactNode;
}

/**
 * Базовая обёртка для SVG-иконок: задаёт единый viewBox, размер и наследование
 * цвета через currentColor. Конкретные иконки передают только внутренние фигуры.
 */
export const Icon = ({ size = '1em', children, ...rest }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);
