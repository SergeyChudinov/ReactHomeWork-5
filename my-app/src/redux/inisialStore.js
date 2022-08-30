import {createStore, combineReducers, applyMiddleware} from 'redux';
import { messageReducer } from './reducers/messageReducer/messageReducer';
import { chatReducer } from './reducers/chatReducer/chatReducer';

import {composeWithDevTools} from "redux-devtools-extension";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import logger from 'redux-logger';

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     console.log('before', store.getState())
//     let result = next(action)
//     console.log('after', store.getState())
//     return result
// }

const time = store => next => action => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action)
    }
    const timout = setTimeout(() => {
        next(action)
    }, delay)
    return () => {
        clearInterval(timout)
    }
}

const persistConfig = {
    key: 'root',
    storage 
}

const reducer = combineReducers({
    chats: chatReducer,
    message: messageReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(time, logger))
export const persist = persistStore(store)

// export const store = createStore(reducer, composeWithDevTools())