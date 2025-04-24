import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Router
import { BrowserRouter } from 'react-router-dom';

// Global SCSS stylesheet w Bootstrap
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)