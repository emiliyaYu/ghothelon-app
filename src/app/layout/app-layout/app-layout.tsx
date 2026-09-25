import type { ReactNode } from 'react';
import { Header } from '@/app/layout/header';
import './app-layout.css';

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <Header />
      <main id="main-content" tabIndex={-1} className="app-main">
        {children}
      </main>
      <footer className="app-footer">Интерактивная карта мира Ghothelon</footer>
    </div>
  );
};
