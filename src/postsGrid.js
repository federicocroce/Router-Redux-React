import React from 'react';

import { connect } from "react-redux";

import Photo from './Photo';

import { filterPosts } from './actions/actionsCreator';

const postsGrid = (props) => {


  var postFiltered = props.state.posts.allPosts;
  // var filterFunction = {};

  // console.error(postFiltered);

  // console.error(props);

  switch (props.location.pathname) {
    case '/sale':
      title = "Ventas";
      postFiltered = props.state.postsFilter;
      // filterFunction = () => props.filterPosts(props.state.posts.allPosts, "SELL_POSTS")
      props.filterPosts(props.state.posts.allPosts, "SELL_POSTS");
      break;
    case '/rent':
      title = "Alquileres";
      postFiltered = props.state.postsFilter;
      // () => props.filterPosts(props.posts.allPosts, "RENT_POSTS");
      break;
    default:
      var title = "Todos";
      var postFiltered = props.state.posts.allPosts;
  }

  // filterFunction();

  // console.log(props);
  // console.error(props);
  return (

    <div>

      <h1>{title}</h1>

      {postFiltered.map((object, index) =>
        <Photo key={index} index={index} object={object} />
      )}

      <button onClick={() => props.filterPosts(props.state.posts.allPosts, "SELL_POSTS")}> Ventas</button>
      <button onClick={() => props.filterPosts(props.state.posts.allPosts, "RENT_POSTS")}> Alquileres</button>

    </div>
  );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    filterPosts(currentPost, action) {
      console.error(action);      
      dispatch(filterPosts(currentPost, action));
    }
  };
}

/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postsGrid);