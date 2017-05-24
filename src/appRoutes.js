import React from 'react';

import Owner from './Owner';
import Main from './components/Main';
import Agency from './Agency';
import Home from './home';
import App from './components/App';
import Tab from './Tab'
import Single from './Single'
import PhotoGrid from './PhotoGrid'


const mainLinksRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   name: "",
  //   exact: true
  // },
  {
    path: "/owner",
    component: Owner,
    name: "Dueño directo"
  },
  {
    path: "/agency",
    component: Agency,
    name: "Inmobiliaria"
  }
];

const tabLinksRoutes = [
  {
    path: "/owner/PhotoGrid",
    component: PhotoGrid,
    name: "PhotoGrid",
    title:"PhotoGrid"
  },
  {
    path: "/owner/Tab",
    component: Tab,
    name: "Tab",
    title:"Titulo"
  },
  {
    path: "/owner/Tab",
    component: Tab,
    name: "Tab",
    title:"Titulo"
  }
];


export {
    mainLinksRoutes,
    tabLinksRoutes
}
