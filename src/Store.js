import {counterReducer} from './reducer';
import { createStore} from "redux";

// const data = {
//     posts
// }

const store = createStore(counterReducer);

export default store;