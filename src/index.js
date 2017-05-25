import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import { store, history } from './Store.js'

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
import NavigationF from './NavigationF';

// import App from './App';
// import Contact from './contact';


import Tab from './Tab';


// import Main from './Main';
import App from './components/App';
import home from './home';
import Single from './Single';
import PhotoGrid from './PhotoGrid';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={home}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view" component={Single}></Route>
      </Route>

      {/*<NavigationF linksRoutes={linksRoutes} />*/}

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

