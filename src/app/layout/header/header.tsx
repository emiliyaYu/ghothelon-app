import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/domains/navigation';
import { MobileMenuButton } from '@/shared/ui';
import styles from './header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.brand} to="/main" aria-label="Гхотэлон: главная">
          Гхотэлон
        </Link>
        <div className={styles.desktopNavigation}>
          <Navigation />
        </div>
        <MobileMenuButton
          className={styles.mobileMenuButton}
          open={isMenuOpen}
          controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        />
      </div>
      <div
        id="mobile-navigation"
        className={`${styles.mobileNavigation} ${isMenuOpen ? styles.mobileNavigationOpen : ''}`}
        hidden={!isMenuOpen}
      >
        <Navigation mobile onNavigate={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};
