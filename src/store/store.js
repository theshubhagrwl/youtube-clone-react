import { createStore, combineReducers } from "redux";

import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({ loading: loadingReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
