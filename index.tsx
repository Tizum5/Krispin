import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from '@usedapp/core';

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);

reportWebVitals();
