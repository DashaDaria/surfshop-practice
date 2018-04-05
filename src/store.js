import {
  createStore,
  applyMiddleware,
  combineREducers
} from 'redux';

import thunk from 'redux-think';

const reducers = combineReducers({
  surfboards,
  surfboardFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
