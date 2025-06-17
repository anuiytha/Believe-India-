import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

console.log('🚀 Application starting...');

const rootElement = document.getElementById('root');
console.log('📦 Root element found:', rootElement);

if (!rootElement) {
  console.error('❌ Root element not found!');
} else {
  try {
    const root = createRoot(rootElement);
    console.log('✅ React root created successfully');

    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    );
    console.log('✅ App rendered successfully');
  } catch (error) {
    console.error('❌ Error rendering app:', error);
  }
}
