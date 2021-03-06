import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import manageUsers from './reducers/manageUsers'
import { Provider } from 'react-redux';
import {createStore} from 'redux'


// add imports and code
const store = createStore(manageUsers)


ReactDOM.render(
  // add imports and code// add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
