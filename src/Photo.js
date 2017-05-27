import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Single from './Single';
import { viewPost } from './actions/actionsCreator';

// import {
//   push,
//   replace,
//   go,
//   goBack,
//   goForward,
// } from 'react-router-redux';

// const back = () => {
//   store.dispatch(goBack());
// }

// const setPath = () => {
//   store.dispatch(push('/view'));
// }


const Photo = (props) => {

  // const post = 
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


      <button onClick={() => props.viewPost(props.posts.allPosts, props.object)}> VIEW</button>

    </div>
  );
}


const mapStateProps = state => {
  // console.error(state);
  return {
    posts: {
      allPosts: state.posts.allPosts,
      currentPost: state.posts.currentPost
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    viewPost(allPosts, post) {
      dispatch(viewPost(allPosts, post));
    }
  };
}


export default connect(mapStateProps, mapDispatchToProps)(Photo);



// <button onClick={store.dispatch(viewPost)}> VIEW</button>

// export default Photo;