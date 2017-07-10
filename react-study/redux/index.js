import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers"
import { Provider } from 'react-redux'
 
import React, {Component} from 'react';
import { render } from 'react-dom';
import App from './App';
 
let store = createStore(reducers);
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);