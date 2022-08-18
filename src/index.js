import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeReducer from './redux/configureStore';
import Bookstore from './Bookstore';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={storeReducer}>
    <React.StrictMode>
      <BrowserRouter>
        <Bookstore />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
