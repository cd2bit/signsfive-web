/**
 * @external {react} https://reactjs.org
 */
import React from 'react';
/**
 * @external {react-dom} https://reactjs.org/docs/react-dom.html
 */
import ReactDOM from 'react-dom';


import { ConnectedRouter } from 'react-router-redux';
/**
 * @external {react-redux} https://redux.js.org/docs/basics/UsageWithReact.html
 */
import { Provider } from 'react-redux';
/**
 * @external {bootstrap} https://getbootstrap.com
 */
import 'bootstrap/dist/css/bootstrap.css';

import { configureStore, history } from './redux/store';
import App from './app';
import registerServiceWorker from './utils/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
