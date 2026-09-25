import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './section-card.module.scss';

export interface SectionCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  /** Заголовок раздела. */
  title: ReactNode;
  /** Краткое описание раздела (например, количество статей). */
  description: ReactNode;
  /** Иконка над заголовком. Скрыта от скринридеров как декоративная. */
  icon?: ReactNode;
}

/**
 * Кликабельная карточка раздела для главной страницы: иконка, заголовок
 * и краткое описание. Рендерится как кнопка, при hover подсвечивается рамка.
 */
export const SectionCard = ({
  title,
  description,
  icon,
  type = 'button',
  className,
  ...rest
}: SectionCardProps) => {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <button className={classes} type={type} {...rest}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </button>
  );
};
