import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import { store, history } from './components/Main/Store.js'

import { mainLinksRoutes as linksRoutes } from './components/Main/AppRoutes.js'
import NavigationBar from './components/Utilities/NavigationBar';

// import App from './App';
// import Contact from './contact';


// import Tab from './Tab';


// import Main from './Main';
// import App from './components/App';
import Home from './components/Sections/Home';
// import Single from './Single';
// import PhotoGrid from './PhotoGrid';


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={Home}></Route>
          {/*<NavigationF linksRoutes={linksRoutes} />*/}
        </div>

      </ConnectedRouter>
    </Provider>
    {/*<MyAwesomeReactComponent />*/}
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);

