import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <AlertTriangle className="w-24 h-24 text-rose-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
              <p className="text-slate-400 text-lg mb-2">
                We encountered an unexpected error. Don't worry, we're on it!
              </p>
              {this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-slate-500 hover:text-slate-400 mb-2">
                    Technical Details
                  </summary>
                  <pre className="bg-slate-900 p-4 rounded-lg text-xs text-rose-400 overflow-auto max-h-40">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <RefreshCw size={20} />
                Reload Page
              </button>
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg hover:scale-105 transition-transform"
              >
                <Home size={20} />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
