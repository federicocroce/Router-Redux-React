import React from 'react';
import NavigationF from './NavigationF';
import {tabLinksRoutes as linksRoutes} from './appRoutes.js'

var Contact = () => <div>
  <h1>Fede</h1>
  <p>Here we are going to show you how to implement support for routing your Redux!</p>

  <NavigationF linksRoutes={linksRoutes}/>
  
</div>

export default Contact;
