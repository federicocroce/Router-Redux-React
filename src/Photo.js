import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';

import Contact from './contact';


class PHOTO extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const props = this.props;
    // console.error(props);
    return (
      <div className="main-obj">
        {/*<Link to={`/view/${props.object}`}>*/}
        <Link replace="true" to={'/contact/view'}>
          <p>{props.object.likes}</p>
        </Link>
        {/*<Switch>*/}
          <Route path="/contact/view" component={Contact}></Route>
        {/*</Switch>*/}

      </div>
    );
  }
}

export default PHOTO;