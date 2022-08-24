import {createStore} from 'redux';
import { messageReducer } from './reducers/messageReducer';
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(messageReducer, composeWithDevTools())