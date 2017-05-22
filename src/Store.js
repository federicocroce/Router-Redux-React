import React from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { push, replace, go, goBack, goForward,} from 'react-router-redux';

import thunk from "redux-thunk";
import registerReducer from "./reducers/register";
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import createHistory from 'history/createBrowserHistory';


import {comments, posts} from "./Data/data"

const defaultStore = {
    posts,
    comments
}

const history = createHistory();
const middleware = routerMiddleware(history);


const reducers = combineReducers({ register: registerReducer, router: routerReducer });
// const store = createStore(reducers, defaultStore);
const store = createStore(reducers, applyMiddleware(middleware));


export {
    store,
    history
}

