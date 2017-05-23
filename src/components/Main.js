import React from 'react';

import { Route, Link, Switch, IndexRoute } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../appRoutes.js'
import NavigationF from '../NavigationF';

import Single from '../Single';
import PhotoGrid from '../PhotoGrid';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  


  render() {

    return (
      
      <div>
        <h1>
          <Link to="/">Welcome to React Router Redux</Link>
        </h1>
        {this.props.posts.map(function(object) {
        return (
          <p key={object.id} data={object} />
        );
      })}
        {/*<p>PROPS{this.props.posts}</p>*/}
        {/*{React.cloneElement(this.props.children, {globalState: this.state})}*/}
        {/*{React.cloneElement(this.props.children, this.props)}*/}
        {/*<NavigationF linksRoutes={linksRoutes} />*/}
      </div>
    );
  }
}


export default Main;