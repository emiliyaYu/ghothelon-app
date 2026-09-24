import { Component, type ErrorInfo, type ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <p className="eyebrow">Ошибка приложения</p>
          <h1>Что-то пошло не так</h1>
          <p>Попробуйте повторить действие или вернуться к карте.</p>
          <button type="button" onClick={this.handleReset}>
            Повторить
          </button>
          <p>
            <a href="/map">Вернуться к карте</a>
          </p>
        </main>
      );
    }

    return this.props.children;
  }
}
