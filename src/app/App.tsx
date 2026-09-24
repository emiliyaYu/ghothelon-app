import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout.tsx'
import { ErrorBoundary } from './providers/ErrorBoundary.tsx'
import { NotFoundPage } from './routes/NotFoundPage.tsx'
import { EncyclopediaPage } from './routes/EncyclopediaPage.tsx'
import { InfoPage } from './routes/InfoPage.tsx'
import { MapPage } from './routes/MapPage.tsx'

export function App() {
  return (
    <ErrorBoundary>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/map" replace />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/encyclopedia" element={<EncyclopediaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </ErrorBoundary>
  )
}
