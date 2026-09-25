import type { HTMLAttributes, ReactNode } from 'react';
import { ReadMoreLink } from '@/shared/ui/read-more-link';
import { Tag } from '@/shared/ui/tag';
import styles from './article-card.module.scss';

export interface ArticleCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Категория материала (например, «Дракон»). Выводится в теге. */
  tag: ReactNode;
  /** Заголовок статьи. */
  title: ReactNode;
  /** Подзаголовок статьи (например, эпитет персонажа). */
  subtitle?: ReactNode;
  /** Краткое описание материала. */
  description: ReactNode;
  /** Адрес полной статьи. */
  href: string;
  /** Текст ссылки на статью. По умолчанию «Читать статью». */
  linkLabel?: ReactNode;
}

/**
 * Карточка статьи для главной страницы и списков: тег категории, заголовок,
 * подзаголовок, краткое описание и ссылка на полный материал.
 */
export const ArticleCard = ({
  tag,
  title,
  subtitle,
  description,
  href,
  linkLabel = 'Читать статью',
  className,
  ...rest
}: ArticleCardProps) => {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <article className={classes} {...rest}>
      <Tag className={styles.tag}>{tag}</Tag>
      <h3 className={styles.title}>{title}</h3>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      <p className={styles.description}>{description}</p>
      <ReadMoreLink className={styles.link} href={href} size="s">
        {linkLabel}
      </ReadMoreLink>
    </article>
  );
};
