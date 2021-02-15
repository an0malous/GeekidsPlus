import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import phonicsGameReducer from './reducers/game-reducer';

const rootReducer = combineReducers ({
    userReducer: userReducer,
    phonicsGameReducer: phonicsGameReducer
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;