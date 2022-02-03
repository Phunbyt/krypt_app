import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { TransactionContextProvider } from './context/TransactionContext';

ReactDOM.render(
  <React.StrictMode>
    <TransactionContextProvider>
      <App />
    </TransactionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
