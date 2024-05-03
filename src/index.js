import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import ErrorPage from './pages/ErrorPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ErrorPage>
        <App />
      </ErrorPage>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
