import React from 'react';
import ReactDOM from "react-dom";

import { Provider, connect } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import Counter from './counter';
import store from './store';

/*
* Reducer: Acá es donde el estado cambia, previamente 
* se debe hacer un dispatch de una acción
*/



/*
* Creo el store principal de la aplicación
*/
// import { createStore } from 'Redux';


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);