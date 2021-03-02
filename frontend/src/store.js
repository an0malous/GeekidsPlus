import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import phonicsGameReducer from './reducers/game-reducer';
import languageDisplayeReducer from './reducers/language-display-reducer';
const rootReducer = combineReducers ({
    phonicsGameReducer: phonicsGameReducer
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;