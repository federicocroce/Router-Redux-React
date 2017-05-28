import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter} from "react-router-redux";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import Counter from './counter';
import Contact from './contact';
import { store, history } from './Store.js'

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
      <ConnectedRouter history={history}>
      <div>
        <Counter/>
        <Contact/>
        </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);