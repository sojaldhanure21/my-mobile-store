import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container not found");
}

const root = ReactDOM.createRoot(container);
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();