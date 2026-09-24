import { NavLink } from 'react-router-dom';
import './navigation.css';

const navigationItems = [
  { to: '/map', label: 'Карта' },
  { to: '/encyclopedia', label: 'Энциклопедия' },
  { to: '/info', label: 'О проекте' },
];

export const Navigation = () => {
  return (
    <nav aria-label="Основная навигация">
      <ul className="navigation-list">
        {navigationItems.map((item) => (
          <li key={item.to}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navigation-link navigation-link--active' : 'navigation-link'
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
