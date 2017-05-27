import { comments, posts } from "./Data/data";
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";


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
    // currentPost,
    counterReducer,
    postReducer,
    routing: routerReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;

// export default counterReducer;