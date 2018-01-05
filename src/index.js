import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import configureStore from './redux/configureStore';
import App from './app';
import registerServiceWorker from './utils/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
