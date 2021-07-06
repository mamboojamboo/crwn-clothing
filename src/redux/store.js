import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from 'redux-logger';
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
    middlewares.push(logger);
}

console.log('middlewares: ', middlewares.length)

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);