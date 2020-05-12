import { createStore, combineReducers } from 'redux';

import { bloghome } from './reducers';

const reducers = combineReducers({
  bloghome,
});

const store = createStore(reducers);

export default store;