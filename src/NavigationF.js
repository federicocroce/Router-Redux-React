import React from 'react';
import { Route, Link, Switch, IndexRoute } from 'react-router-dom';

// import PhotoGrid from './PhotoGrid'


class NavigationF extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     linksRoutes
        // }

    }



    generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            <Link key={index} to={linksRoutes[index].path} > {linksRoutes[index].name}{index +1} </Link>
        ))
    };

    generateRutes = (linksRoutes) => {
        // console.error(linksRoutes);

        return linksRoutes.map((route, index) => ( 

        <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component}> 
            
        </Route>

        ))
    };


    render() {

        const linksRoutes = this.props.linksRoutes;

        return (
            <div>
                {this.generateLinks(linksRoutes)}
                {/*{ React.cloneElement(this.props.children, this.props) }*/}
                <Switch>
                    {this.generateRutes(linksRoutes)}
                    {/*<IndexRoute componenet={PhotoGrid}/>*/}
                </Switch>
            </div>
        );
    }
}

export default NavigationF;
