import React from 'react';

import { connect } from "react-redux";

import Photo from './Photo';

const Owner = (props) => {

  // console.log(props);
  // console.error(props);
  return (
    <div>
      <h1>Test Dueño Directo</h1>
      {props.posts.allPosts.map((object, index) =>
           <Photo key={index} index={index} object={object} />
      )}
    </div>
  );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts
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
  null
)(Owner);