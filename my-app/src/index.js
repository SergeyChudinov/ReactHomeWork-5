import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './redux/inisialStore';

import { PersistGate } from 'redux-persist/integration/react';
import { persist } from './redux/inisialStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);



