import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

export default function configureStore(preloadedState) {
  return createStore(reducers, preloadedState, applyMiddleware(thunk));
}
