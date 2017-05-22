import React from 'react';

// import {Link} from 'react-router-dom';w
/*

const Main = React.createClass({
  render(){
    return(
      <div>
        <h1>Welcome to React Router Redux
          <Link to="/"></Link>
        </h1>
        {React.cloneElement(this.prpos.children, this.props)}
      </div>
    )
  }
})*/

class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>Welcome to React Router Redux
          <Link to="/"></Link>
        </h1>
        {React.cloneElement(this.prpos.children, this.props)}
      </div>
    );
  }
}

export default Main;