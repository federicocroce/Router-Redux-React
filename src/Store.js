// import rootReducer from './reducer';
// import { createStore} from "redux";


import { comments, posts } from "./Data/data";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware } from "react-router-redux";

// console.log(rootReducer);
// const data = {
//     posts
// }




const postsData = {
    allPosts: posts,
    currentPost: {}
}

// const defaultStore = {
//     value: 5,
//     posts: {
//         allPosts: posts,
//         currentPost: {}
//     }
// }




const counterReducer = (state = 0, action) => {
    // console.log("REDUC");
    // console.log(state);
    //     console.log(action);

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
    // return state;
}


const postReducer = (state = postsData, action) => {
    // console.log("REDUC");
    // console.log(state);
    //     console.log(action);

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
    // return state;
}

const allReducers = {
    counterReducer,
    postReducer
}


let finalReducers = {}
Object.keys(allReducers).forEach(key => finalReducers[key] = allReducers[key])
finalReducers.routing = routerReducer


const history = createHistory();

const middleware = routerMiddleware(history);

// const store = createStore(combineReducers(allReducers));

console.log(allReducers);

const store = createStore(finalReducers, applyMiddleware(middleware));



export default store;
