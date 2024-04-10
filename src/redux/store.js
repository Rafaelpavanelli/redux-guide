import {createStore} from 'redux';
import {rootReducer} from './root-reducer.js';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';

export const store = createStore(rootReducer,applyMiddleware(logger));