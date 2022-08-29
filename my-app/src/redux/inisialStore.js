import {createStore, combineReducers} from 'redux';
import { messageReducer } from './reducers/messageReducer/messageReducer';
import { chatReducer } from './reducers/chatReducer/chatReducer';

import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    chats: chatReducer,
    message: messageReducer
})

export const store = createStore(reducer, composeWithDevTools())