import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';


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

        //    if(linksRoutes[index].exact){
        <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} handler="asdasdasd" />
            //    }
            //    else{
            //         return <Route path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} />
            //    }

        ))
    };


    render() {

        const linksRoutes = this.props.linksRoutes;

        return (
            <div>
                {this.generateLinks(linksRoutes)}

                <Switch>
                    {this.generateRutes(linksRoutes)}
                </Switch>
            </div>
        );
    }
}

export default NavigationF;
