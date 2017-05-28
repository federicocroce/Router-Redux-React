// import React from 'react';

// import { Route, Link, Switch, IndexRoute } from 'react-router-dom';

// import { mainLinksRoutes as linksRoutes } from './appRoutes.js'
// import NavigationF from './NavigationF';

// import Photo from './Photo';


// class Owner extends React.Component {

//   constructor(props) {
//     super(props);
//   }


//   render() {

//     return (

//       <div>

//         <h1>Dueño directo</h1>



//         {/*<p> {JSON.stringify(this.props)} </p>*/}


//         {this.props.posts.allPosts.map((object, index) =>
//           <Photo key={index} index={index} object={object} />
//         )}


//       </div>
//     );
//   }
// }


// export default Owner;




import React from 'react';

import { connect } from "react-redux";

import Photo from './Photo';

const Owner = (props) => {

  // console.log(props);
  console.error(props.posts);
  return (
    <div>
      <h1>OWNER</h1>
      {props.posts.allPosts.map((object, index) =>
           <Photo key={index} index={index} object={object} />
      )}
    </div>
  );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts
  };
}

/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  null
)(Owner);