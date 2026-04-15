import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import { HelmetProvider } from "react-helmet-async";

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <HelmetProvider>
    <App />
  </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
)
