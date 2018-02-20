/**
 * @external {react} https://reactjs.org
 */
import React from 'react';
/**
 * @external {react-dom} https://reactjs.org/docs/react-dom.html
 */
import ReactDOM from 'react-dom';
/**
 * @external {react-router-dom} https://reacttraining.com/react-router/
 */
import { BrowserRouter } from 'react-router-dom';
/**
 * @external {react-redux} https://redux.js.org/docs/basics/UsageWithReact.html
 */
import { Provider } from 'react-redux';
/**
 * @external {bootstrap} https://getbootstrap.com
 */
import 'bootstrap/dist/css/bootstrap.css';

import configureStore from './redux/store';
import App from './app';
import registerServiceWorker from './utils/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
