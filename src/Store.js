import React from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { push, replace, go, goBack, goForward,} from 'react-router-redux';

import thunk from "redux-thunk";
import {routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import  registerReducer from "./reducers/index";
import {comments, posts} from "./Data/data"

const defaultStore = {
    posts,
    comments
}

const history = createHistory();
const middleware = routerMiddleware(history);


// const reducers = combineReducers({ ...registerReducer, router: routerReducer });
// const store = createStore(reducers, defaultStore);
const store = createStore(registerReducer, defaultStore, applyMiddleware(middleware));


export {
    store,
    history
}

