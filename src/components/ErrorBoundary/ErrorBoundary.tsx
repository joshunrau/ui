import React, { type ErrorInfo } from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState =
  | {
      didCatch: false;
      error: null;
    }
  | {
      didCatch: true;
      error: unknown;
    };

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.reset = this.reset.bind(this);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { didCatch: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error({ error, info });
  }

  render() {
    if (this.state.didCatch) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-1 p-1">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-muted">Unexpected Error</h1>
          <h3 className="sm:text-5x text-4xl font-extrabold tracking-tight">Something Went Wrong</h3>
          <p className="mt-2 max-w-prose text-center text-base text-muted">
            We apologize for the inconvenience. If this is the first time you have encountered this issue, we recommend reloading the page.
            Otherwise, please contact us for assistance.
          </p>
          <div className="mt-6">
            <button
              className="text-sky-800 underline-offset-4 hover:text-sky-700 hover:underline"
              type="button"
              onClick={() => {
                window.location.assign(window.location.origin);
              }}
            >
              Reload Page<span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }

  reset() {
    this.setState(initialState);
  }
}
