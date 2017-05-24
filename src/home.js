import React from 'react';
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import App from './components/App';

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
import NavigationF from './NavigationF';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>Welcome to React Router Redux asdasd</h1>

        asd
        {/*<NavigationF linksRoutes={linksRoutes} />*/}
      </div>
    );
  }
}

export default Home;