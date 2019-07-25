import {createStore, applyMiddleware} from 'redux'
import reducer from './root-reducer';
import logger from 'redux-logger'
 
const middleware = [logger]

export const store = createStore(reducer,applyMiddleware(...middleware));

