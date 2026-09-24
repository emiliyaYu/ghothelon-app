import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">404</p>
      <h1>Страница не найдена</h1>
      <p>Проверьте адрес или вернитесь на карту мира.</p>
      <Link className="button-link" to="/map">
        Перейти к карте
      </Link>
    </section>
  )
}
