import React from 'react';
import { store } from './Store.js'
import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'react-router-redux';

const back = () => {
  store.dispatch(goBack());
}

const setPath = () => {
  store.dispatch(push('/contact'));
}

class Tab extends React.Component {

  constructor(props) {
    super(props);

    console.error(this)
  }


  render() {

    return (
      <div>
        <h1>Tab</h1>
        <p>{this.props.title}</p>
        <button onClick={back}>Back</button>
        <button onClick={setPath}>Contact</button>
      </div>
    );
  }
}

export default Tab;