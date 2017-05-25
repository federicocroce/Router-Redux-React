import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';

import Single from './Single';

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



class Photo extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const props = this.props;
    // console.error(props);
    return (
      <div className="main-obj">
        {/*<Link to={`/view/${props.object}`}>*/}
        <Link to={'/view'}>
          <p>{props.object.likes}</p>
        </Link>
        {/*<Switch>*/}
          <Route path="/view" component={Single} data={props.object}></Route>
        {/*</Switch>*/}

      </div>
    );
  }
}

export default Photo;