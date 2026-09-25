import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import styles from './tag.module.scss';

interface TagBaseProps {
  /** Активное (выбранное) состояние тега. */
  active?: boolean;
}

type TagAsSpan = TagBaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
    href?: undefined;
  };

type TagAsLink = TagBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
    /** Адрес перехода. Если задан, тег рендерится как ссылка `<a>`. */
    href: string;
  };

export type TagProps = TagAsSpan | TagAsLink;

export const Tag = ({ active = false, className, children, ...rest }: TagProps) => {
  const classes = [styles.tag, active ? styles.active : null, className].filter(Boolean).join(' ');

  if (rest.href != null) {
    const { href, ...anchorRest } = rest as TagAsLink;
    return (
      <a className={classes} href={href} {...anchorRest}>
        {children}
      </a>
    );
  }

  const spanRest = rest as Omit<TagAsSpan, 'href'>;
  return (
    <span className={classes} {...spanRest}>
      {children}
    </span>
  );
};
