import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../actions/actionsCreator';
import Main from './Main';

function mapStateProps(state){
    return{
        posts:state.posts,
        comments:state.comments
    }
}

function mapDispachToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch);
}

const App = connect(mapStateProps, mapDispachToProps)(Main);

export default App;