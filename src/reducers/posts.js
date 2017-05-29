// a reducer takes in two things
import { store } from '../Store.js'
import { postsResponse } from "../Data/data";

const postsData = {
    allPosts: postsResponse,
    currentPost: {}
}


const posts = (state = postsData, action) => {

    switch (action.type) {
        case 'VIEW_POST':
            return {...state,
                currentPost: action.currentPost};
            break;
        default:
            return state
    }
}

// const setCurrentPost = (state = postsData.currentPost, action) => {

//     switch (action.type) {
//         case 'SET_POST':
//             // console.error("El post cambio");
//             // console.error(state);
//             // console.error(action);
//             return state.currentPost = action.currentPost;
//             break;
//         default:
//             return state
//     }
// }




export default posts;