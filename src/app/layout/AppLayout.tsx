import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/domains/navigation';
import './app-layout.css';

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">
        К содержимому
      </a>
      <header className="app-header">
        <div className="app-header__inner">
          <Link className="app-brand" to="/map" aria-label="Ghothelon: карта">
            Ghothelon
          </Link>
          <Navigation />
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="app-main">
        {children}
      </main>
      <footer className="app-footer">Интерактивная карта мира Ghothelon</footer>
    </div>
  );
};
