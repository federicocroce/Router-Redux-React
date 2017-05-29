import React from 'react';

import { connect } from "react-redux";


const Single = (props) => {
  console.error(props);
  return (
    <div>
      <h1>Single</h1>
      {JSON.stringify(props.currentPost)}
    </div>
  );
}


const mapStateToProps = (state) => {
  // console.log("state");
  // console.log(state);
  return {
    currentPost: state.posts.currentPost
  };
}


// const mapDispatchToProps = dispatch => {
//   return {
//     viewPost(currentPost) {
//        dispatch(viewPost(currentPost));
//     }
//   };
// }


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
)(Single);
