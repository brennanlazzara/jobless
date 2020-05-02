import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
