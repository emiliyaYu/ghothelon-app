import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

type NavigationItem =
  { label: string; to: string; disabled?: false } | { label: string; to?: never; disabled: true };

const navigationItems: NavigationItem[] = [
  { to: '/map', label: 'Карта' },
  { to: '/encyclopedia', label: 'Энциклопедия' },
  { label: 'Словарь', disabled: true },
  { label: 'Хроники', disabled: true },
  { label: 'Предания', disabled: true },
];

interface NavigationProps {
  onNavigate?: () => void;
  mobile?: boolean;
}

export const Navigation = ({ onNavigate, mobile = false }: NavigationProps) => {
  return (
    <nav aria-label="Основная навигация">
      <ul className={`${styles.navigationList} ${mobile ? styles.mobileNavigationList : ''}`}>
        {navigationItems.map((item) => (
          <li key={item.label}>
            {item.disabled ? (
              <span className={styles.navigationItem} aria-disabled="true">
                {item.label}
              </span>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigationItem} ${styles.navigationItemActive}`
                    : styles.navigationItem
                }
                to={item.to}
                onClick={onNavigate}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
