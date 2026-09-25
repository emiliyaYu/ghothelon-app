import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRightIcon } from '@/shared/icons';
import styles from './read-more-link.module.scss';

export type ReadMoreLinkSize = 's' | 'm';

export interface ReadMoreLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Размер ссылки: `s` (12px) или `m` (14px). */
  size?: ReadMoreLinkSize;
  /** Текст ссылки. */
  children?: ReactNode;
}

const ICON_SIZE: Record<ReadMoreLinkSize, number> = {
  s: 12,
  m: 14,
};

const SIZE_CLASS: Record<ReadMoreLinkSize, string> = {
  s: styles.sizeS,
  m: styles.sizeM,
};

/**
 * Ссылка «Читать статью →» со стрелкой. Используется в карточках и на страницах
 * как призыв перейти к полному материалу.
 */
export const ReadMoreLink = ({
  size = 'm',
  children = 'Читать статью',
  className,
  ...rest
}: ReadMoreLinkProps) => {
  const classes = [styles.link, SIZE_CLASS[size], className].filter(Boolean).join(' ');

  return (
    <a className={classes} {...rest}>
      <span className={styles.label}>{children}</span>
      <span className={styles.icon} aria-hidden="true">
        <ArrowRightIcon size={ICON_SIZE[size]} />
      </span>
    </a>
  );
};
