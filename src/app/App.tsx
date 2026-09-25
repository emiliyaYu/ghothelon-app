import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/app-layout';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { NotFoundPage } from './routes/NotFoundPage';
import { EncyclopediaPage } from './routes/EncyclopediaPage';
import { InfoPage } from './routes/InfoPage';
import { MapPage } from './routes/MapPage';
import { MainPage } from './routes/main-page';

export const App = () => {
  return (
    <ErrorBoundary>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/encyclopedia" element={<EncyclopediaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </ErrorBoundary>
  );
};
