import React from 'react';
import { Route, NavLink, Switch, IndexRoute } from 'react-router-dom';

// import PhotoGrid from './PhotoGrid'


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }



    generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            <NavLink  key={index} to={linksRoutes[index].path} ><p> {linksRoutes[index].name}</p></NavLink>
        ))
    };

    generateRutes = (linksRoutes, data) => {
        return linksRoutes.map((route, index) => {
              return <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} title="Fedeeee" data={data}></Route>
        })
    };


    render() {

        const linksRoutes = this.props.linksRoutes;

        const data = this.props.data;

        // console.error(data);

        return (
            <div>
                {this.generateLinks(linksRoutes)}

                {this.generateRutes(linksRoutes, data)}

            </div>
        );
    }
}

export default NavigationBar;
