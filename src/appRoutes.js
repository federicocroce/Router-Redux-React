import React from 'react';

import Contact from './contact';
import Home from './home';
import App from './components/App';
import Tab from './Tab'
import Single from './Single'
import PhotoGrid from './PhotoGrid'


const mainLinksRoutes = [
  {
    path: "/",
    component: App,
    name: "Principal",
    exact: true
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contacto"
  },
  {
    path: "/TAB",
    component: Contact,
    name: "TAB"
  }
];

const tabLinksRoutes = [
  {
    path: "/contact/PhotoGrid",
    component: PhotoGrid,
    name: "PhotoGrid",
    title:"PhotoGrid"
  },
  {
    path: "/contact/Tab",
    component: Tab,
    name: "Tab",
    title:"Titulo"
  },
  {
    path: "/contact/Tab",
    component: Tab,
    name: "Tab",
    title:"Titulo"
  }
];


export {
    mainLinksRoutes,
    tabLinksRoutes
}
