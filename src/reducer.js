import { comments, posts } from "./Data/data"


const defaultStore = {
    value: 5,
    posts: {
        allPosts: posts,
        currentPost: {}
    }
}



const counterReducer = (state = defaultStore, action) => {
    // console.log("REDUC");
    // console.log(state);
    //     console.log(action);

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, 
                value : state.value + 1 
            };
        case 'DECREMENT':
            return {
                ...state, 
                value : state.value - 1 
            };
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

export { counterReducer };