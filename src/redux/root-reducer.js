import {combineReducers} from 'redux';
import {userReducer} from './User/reducer.js';
import { CartReducer } from './Cart/reducer.js';
export const rootReducer = combineReducers({userReducer,CartReducer});
