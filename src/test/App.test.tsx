// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { App } from '../app/App'
import { ErrorBoundary } from '../app/providers/ErrorBoundary'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

function renderApp(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App Shell', () => {
  it.each([
    ['/', 'Карта мира'],
    ['/map', 'Карта мира'],
    ['/encyclopedia', 'Энциклопедия'],
    ['/info', 'Мир Ghothelon'],
    ['/unknown', 'Страница не найдена'],
  ])('renders %s', (path, heading) => {
    renderApp(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'Основная навигация' })).toBeTruthy()
  })

  it('navigates and marks the active link', () => {
    renderApp('/map')
    fireEvent.click(screen.getByRole('link', { name: 'Энциклопедия' }))
    expect(screen.getByRole('heading', { name: 'Энциклопедия' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Энциклопедия' }).getAttribute('aria-current')).toBe(
      'page',
    )
  })

  it('returns from 404 to the map', () => {
    renderApp('/unknown')
    fireEvent.click(screen.getByRole('link', { name: 'Перейти к карте' }))
    expect(screen.getByRole('heading', { name: 'Карта мира' })).toBeTruthy()
  })

  it('shows an error fallback and allows retrying', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    let shouldThrow = true
    function BrokenPage() {
      if (shouldThrow) throw new Error('Test render failure')
      return <h1>Восстановлено</h1>
    }
    render(
      <ErrorBoundary>
        <BrokenPage />
      </ErrorBoundary>,
    )
    expect(screen.getByRole('heading', { name: 'Что-то пошло не так' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Вернуться к карте' }).getAttribute('href')).toBe(
      '/map',
    )
    shouldThrow = false
    fireEvent.click(screen.getByRole('button', { name: 'Повторить' }))
    expect(screen.getByRole('heading', { name: 'Восстановлено' })).toBeTruthy()
  })
})
