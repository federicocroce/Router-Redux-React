import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import { store, history } from './Store.js'

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'

// import App from './App';
import Contact from './contact';


import Tab from './Tab';
import NavigationF from './NavigationF';

import Main from './Main';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

/*

const router = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));*/



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

