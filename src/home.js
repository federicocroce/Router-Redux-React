import React from 'react';
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import App from './components/App';

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
import NavigationF from './NavigationF';
import postsGrid from './postsGrid';

import Owner from './Owner';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>
          <Link to="/">Venta/Alquier Inmuebles</Link>
        </h1>

        {/*{this.props.children.map((object, index) =>
          <p key={index}> {JSON.stringify(object)} </p>
        )}*/}

        {/*{React.cloneElement(this.props.children, this.props)}

        React.Children.map(this.props.children,
    (child) => React.cloneElement(child, {this.props})*/}
        <NavigationF linksRoutes={linksRoutes} />
        <postsGrid/>
      </div>
    );
  }
}

export default Home;