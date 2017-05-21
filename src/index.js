import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Link, Switch } from 'react-router-dom';

// import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from "redux-thunk";
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();
// const middleware = routerMiddleware(history);

// import registerReducer from "./reducers/register";

import {store, history} from './Store.js'

import {mainLinksRoutes as linksRoutes} from './appRoutes.js'

import App from './App';
import Contact from './contact';
import Home from './home';

import NavigationF from './NavigationF';

// console.error(linksRoutes);

// const reducers = combineReducers({ register: registerReducer, router: routerReducer });
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

// const linksRoutes = [
//   {
//     path: "/",
//     component: Home,
//     name: "Principal"
//   },
//   {
//     path: "/contact",
//     component: Contact,
//     name: "Contacto"
//   }
// ];





ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>Algo</h1>

        <NavigationF linksRoutes={linksRoutes}/>

      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


