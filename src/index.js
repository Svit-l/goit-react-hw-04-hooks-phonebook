import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById('root')
);
