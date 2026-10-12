import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Dr. Randa App:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.href = '/?page=home';
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          dir="rtl"
          className="min-h-screen bg-[#FAF8F5] text-[#14281D] flex items-center justify-center p-6 font-sans"
        >
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E5DFD5] shadow-xl text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E8EFEA] text-[#1E4D3B] flex items-center justify-center font-bold text-2xl">
              ⚕️
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#14281D]">
                عيادة د. راندا للتغذية العلاجية
              </h2>
              <p className="text-sm text-[#4A5D52] leading-relaxed">
                حدث تحديث في جلسة التصفح، يرجى إعادة تحميل الصفحة أو العودة إلى الصفحة الرئيسية لمتابعة التصفح.
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full py-3 px-5 rounded-xl bg-[#1E4D3B] text-white font-semibold text-sm hover:bg-[#16382B] transition-colors shadow-sm"
              >
                العودة إلى الصفحة الرئيسية
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full py-2.5 px-4 rounded-xl border border-[#E5DFD5] text-[#14281D] font-medium text-xs hover:bg-[#FAF8F5] transition-colors"
              >
                إعادة تحميل الصفحة
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
