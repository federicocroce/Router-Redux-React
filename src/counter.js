import React from 'react';

import { connect } from "react-redux";



const Counter = (props) => {

    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.onIncrement}>+</button>
            <button onClick={props.onDecrement}>-</button>
        </div>
    );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        value: state.counter
        // posts: state.posts
    };
}

/*
* Dispatch de las acciones
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            // console.log("SUMA");
            dispatch({
                type: 'INCREMENT'
            })
        },
        onDecrement: () => {
            // console.log("RESTA");
            dispatch({
                type: 'DECREMENT'
            })
        }
    };
};

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
