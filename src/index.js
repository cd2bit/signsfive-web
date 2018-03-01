/**
 * @external {react} https://reactjs.org
 */
import React from 'react';
/**
 * @external {react-dom} https://reactjs.org/docs/react-dom.html
 */
import ReactDOM from 'react-dom';
/**
 * @external {react-router-redux} https://github.com/reactjs/react-router-redux
 */
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
import A11yNavigatedMessageContainer from './containers/a11y-navigated-message';
import registerServiceWorker from './lib/registerServiceWorker';
/**
 * @type {object} store
*/
const store = configureStore();
/**
 * ReactDOM render.
 * @type {class} ReactDOM
 * @type {function} ReactDOM.render
 */
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <React.Fragment>
      <A11yNavigatedMessageContainer />
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
