import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import phonicsGameReducer from './reducers/game-reducer';
import languageDisplayReducer from './reducers/language-display-reducer';
const rootReducer = combineReducers ({
    phonicsGameReducer,
    languageDisplayReducer
});
let middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, logger];
  }
  
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;