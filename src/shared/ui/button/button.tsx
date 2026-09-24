import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

export type ButtonVariant = 'light' | 'dark';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Визуальный вариант: светлая заливка или тёмная «призрачная» кнопка. */
  variant?: ButtonVariant;
  /** Иконка в начале кнопки. Скрыта от скринридеров как декоративная. */
  icon?: ReactNode;
}

export const Button = ({
  variant = 'light',
  icon,
  children,
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  return (
    <button className={classes} type={type} {...rest}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
};
