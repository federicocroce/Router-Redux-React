import { postsResponse } from "./Data/data";
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

// console.log(posts);


const postsData = {
    allPosts: postsResponse,
    currentPost: {}
}

// const defaultStore = {
//     value: 5,
//     posts: {
//         allPosts: posts,
//         currentPost: {}
//     }
// }




const counter = (state = 5, action) => {
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


const posts = (state = postsData, action) => {
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



// const counterReducer = (state = 0, action) => {
//     console.log(state);
//     console.log(action);

//   switch (action.type) {
//     case 'INCREMENT':
//       return state.value + 1;
//     case 'DECREMENT':
//       return state.value - 1;
//     default:
//       return state.value;
//   }
// }

// export const reducer = combineReducers({
//   counterReducer,
//   postReducer
// })


const allReducers = {
    counter,
    posts,
    routing: routerReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;

// export default postReducer;