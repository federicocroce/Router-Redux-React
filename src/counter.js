import React from 'react';
import ReactDOM from "react-dom";

import { Provider, connect } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';



/*
* Componente: Un simple comente React <img draggable="false" class="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg">
*/



const Counter = (props) => {
    // console.log("Counter");
    // console.log(props);
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
        value: state
        // posts: state.posts
    };
}

/*
* Dispatch de las acciones
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            console.log("SUMA");
            dispatch({
                type: 'INCREMENT'
            })
        },
        onDecrement: () => {
            console.log("RESTA");
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
