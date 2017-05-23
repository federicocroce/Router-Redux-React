// a reducer takes in two things


function posts(state = [], action){
    // console.error("El post cambio");
    console.error(state, action);
    return state
}

export default posts;