import React from 'react'
import ReactDOM from 'react-dom/client'
import TranscationProvider from './context/TransactionContext';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TranscationProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </TranscationProvider>
)
