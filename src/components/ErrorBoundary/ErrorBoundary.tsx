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
        <div className="flex min-h-screen flex-col items-center justify-center gap-1 p-3 text-center">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-muted">Unexpected Error</h1>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Something Went Wrong</h3>
          <p className="mt-2 max-w-prose text-sm text-muted sm:text-base">
            We apologize for the inconvenience. Please contact us for further assistance.
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
