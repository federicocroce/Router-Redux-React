// a reducer takes in two things
import { store } from '../Store.js'

function currentPost(state = {}, action) {
    // console.error("El post cambio");
    // console.error(action);
    switch (action.type) {
        case 'VIEW_POST':
            // console.error(action);
            
            // return action.id;
            console.error(store.getState());
            return state.currentPost = action.allPosts.find(product => product.id == action.post.id);
            
            break;
        default:
            return state
    }

    return state;
}

// function post(state = [], action) {
//     // console.error("El post cambio");
//     // console.error(action);
//     // switch (action.type) {
//     //     case 'VIEW_POST':
//     //         console.error(state);
//     //         return action.id;
//     //         // return state.post.filter(product => product.id == action.post.id)
//     //         break;
//     //     default:
//     //         return state
//     // }

//     return state;
// }



export default currentPost;