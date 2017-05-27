import React from 'react';

import { Route, Link, Switch, IndexRoute } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
import NavigationF from './NavigationF';

import Photo from './Photo';


class Owner extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div>

        <h1>Dueño directo</h1>



        {/*<p> {JSON.stringify(this.props)} </p>*/}


        {this.props.posts.allPosts.map((object, index) =>
          <Photo key={index} index={index} object={object} />
        )}


      </div>
    );
  }
}


export default Owner;
