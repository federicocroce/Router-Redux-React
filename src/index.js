import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import { store, history } from './Store.js'

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
import NavigationF from './NavigationF';

// import App from './App';
import Contact from './contact';


import Tab from './Tab';


// import Main from './Main';
import App from './components/App';
import Single from './Single';
import PhotoGrid from './PhotoGrid';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App}>
        <Route component={PhotoGrid}></Route>
        <Route path="/view" component={Single}></Route>
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

