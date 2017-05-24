import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';

import Owner from './Owner';


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
        <Link to={'/owner/view'}>
          <p>{props.object.likes}</p>
        </Link>
        {/*<Switch>*/}
          <Route path="/owner/view" component={Owner}></Route>
        {/*</Switch>*/}

      </div>
    );
  }
}

export default PHOTO;