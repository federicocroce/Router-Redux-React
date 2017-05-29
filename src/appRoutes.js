import React from 'react';

import postsGrid from './postsGrid';
import Owner from './Owner';
import Main from './components/Main';
import {OwnerConnect, SingleConnect} from './components/App';
import Agency from './Agency';
import Home from './home';
import App from './components/App';
import Tab from './Tab'
import Single from './Single'




const mainLinksRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   name: "Alquiler/Venta",
  //   exact: true
  // },
  {
    path: "/main",
    component: postsGrid,
    name: "Todos"
  },
  {
    path: "/sale",
    component: postsGrid,
    name: "Ventas"
  },
  {
    path: "/rent",
    component: postsGrid,
    name: "Alquileres"
  },
  {
    path: "/view",
    component: Single,
    name: ""
  }
];

// const tabLinksRoutes = [
//   // {
//   //   path: "/owner/PhotoGrid",
//   //   component: PhotoGrid,
//   //   name: "PhotoGrid",
//   //   title:"PhotoGrid"
//   // },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   }
// ];


export {
    mainLinksRoutes
    // tabLinksRoutes
}
