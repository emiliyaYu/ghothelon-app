import type { ButtonHTMLAttributes } from 'react';
import { CloseIcon, MenuIcon } from '@/shared/icons';
import styles from './mobile-menu-button.module.scss';

export interface MobileMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Открыто ли мобильное меню. */
  open: boolean;
  /** ID панели навигации, которой управляет кнопка. */
  controls: string;
}

/** Кнопка мобильного меню с плавным переходом между menu и close иконками. */
export const MobileMenuButton = ({
  open,
  controls,
  className,
  type = 'button',
  ...rest
}: MobileMenuButtonProps) => {
  const classes = [styles.button, className].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      type={type}
      aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={open}
      aria-controls={controls}
      {...rest}
    >
      <span className={styles.icon} aria-hidden="true">
        <span className={`${styles.iconLayer} ${!open ? styles.iconLayerVisible : ''}`}>
          <MenuIcon size={20} />
        </span>
        <span className={`${styles.iconLayer} ${open ? styles.iconLayerVisible : ''}`}>
          <CloseIcon size={20} />
        </span>
      </span>
    </button>
  );
};
