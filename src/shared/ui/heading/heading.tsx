import type { HTMLAttributes } from 'react';
import styles from './heading.module.scss';

export type HeadingSize = 'xs' | 's' | 'm' | 'l' | 'xl';

/** Семантические цвета заголовка из токенов дизайн-системы. */
export type HeadingColor = 'foreground' | 'primary' | 'accent' | 'subtle';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Размер заголовка: от `xs` до `xl`. По умолчанию `xl` (крупный page-title). */
  size?: HeadingSize;
  /** Цвет из токенов. Если не задан, наследуется от родителя. */
  color?: HeadingColor;
  /** Курсивное начертание. По умолчанию `false` (прямое). */
  italic?: boolean;
}

const sizeClasses: Record<HeadingSize, string> = {
  xs: styles.sizeXs,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXl,
};

const colorClasses: Record<HeadingColor, string> = {
  foreground: styles.colorForeground,
  primary: styles.colorPrimary,
  accent: styles.colorAccent,
  subtle: styles.colorSubtle,
};

export const Heading = ({
  size = 'xl',
  color,
  italic = false,
  children,
  className,
  ...rest
}: HeadingProps) => {
  const classes = [
    styles.heading,
    sizeClasses[size],
    color ? colorClasses[color] : null,
    italic ? styles.italic : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
};
