import React from 'react';

import App from './App';
import Contact from './contact';
import Home from './home';
import Tab from './Tab'
import Single from './Single'
import PhotoGrind from './PhotoGrind'


const mainLinksRoutes = [
  {
    path: "/",
    component: Home,
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
