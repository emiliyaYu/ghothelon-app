import type { HTMLAttributes } from 'react';
import styles from './gold-rule.module.scss';

export type GoldRuleProps = HTMLAttributes<HTMLHRElement>;

export const GoldRule = ({ className, ...rest }: GoldRuleProps) => {
  const classes = [styles.goldRule, className].filter(Boolean).join(' ');

  return <hr className={classes} {...rest} />;
};
