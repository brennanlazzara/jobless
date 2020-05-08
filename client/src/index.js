import React, { Fragment } from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
