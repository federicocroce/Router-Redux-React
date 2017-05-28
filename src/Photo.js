// import React from 'react';
// import { NavLink, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Single from './Single';
// import { viewPost } from './actions/actionsCreator';

// // import {
// //   push,
// //   replace,
// //   go,
// //   goBack,
// //   goForward,
// // } from 'react-router-redux';

// // const back = () => {
// //   store.dispatch(goBack());
// // }

// // const setPath = () => {
// //   store.dispatch(push('/view'));
// // }


// const Photo = (props) => {

//   // const post = 
//   console.error(props);
//   return (
//     <div className="main-obj">
//       {/*<Link to={`/view/${props.object}`}>*/}
//       <NavLink to={'/view'}>
//         <p>{props.object.likes}</p>
//       </NavLink>
//       {/*<Switch>*/}
//       <Route path="/view" component={Single}></Route>
//       {/*</Switch>*/}


//       <button onClick={() => props.viewPost(props.posts.allPosts, props.object)}> VIEW</button>

//     </div>
//   );
// }


// const mapStateProps = state => {
//   // console.error(state);
//   return {
//     posts: {
//       allPosts: state.posts.allPosts,
//       currentPost: state.posts.currentPost
//     }
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     viewPost(allPosts, post) {
//       dispatch(viewPost(allPosts, post));
//     }
//   };
// }


// export default connect(mapStateProps, mapDispatchToProps)(Photo);



// <button onClick={store.dispatch(viewPost)}> VIEW</button>

// export default Photo;


import React from 'react';

import { NavLink, Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";

import Single from './Single';
import { viewPost } from './actions/actionsCreator';

const Photo = (props) => {

  // console.log(props);
  console.error("Photo");
  console.error(props);
  return (
    <div className="main-obj">
      {/*<Link to={`/view/${props.object}`}>*/}
      <NavLink to={'/view'}>
        <p>{props.object.likes}</p>
      </NavLink>
      {/*<Switch>*/}
      <Route path="/view" component={Single}></Route>
      {/*</Switch>*/}


      <button onClick={() => props.viewPost(props)}> VIEW</button>

    </div>
  );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.currentPost
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrement: () => {
//       console.log("SUMA");
//       dispatch({
//         type: 'INCREMENT'
//       })
//     },
//     onDecrement: () => {
//       console.log("RESTA");
//       dispatch({
//         type: 'DECREMENT'
//       })
//     }
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    viewPost: (currentPost) => {
      dispatch({
        type: 'VIEW_POST'
      })
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
)(Photo);