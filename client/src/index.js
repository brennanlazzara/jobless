import React from 'react';
// import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import store from './store';

ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root')
);


serviceWorker.register();
