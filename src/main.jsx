import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext'
import { LoadingProvider } from './context/LoadingContext'
import './performance-optimization.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <LoadingProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </LoadingProvider>
  </ThemeContextProvider>
)
