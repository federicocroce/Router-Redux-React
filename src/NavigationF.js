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
            <Link key={index} to={linksRoutes[index].path} ><p> {linksRoutes[index].name}</p></Link>
        ))
    };

    generateRutes = (linksRoutes, data) => {
        // console.error(data);

       

        return linksRoutes.map((route, index) => {
            // console.error(linksRoutes[index].component);
            // if (linksRoutes[index].component == undefined) {
            //     // console.error("UNDEF");
            //   return  <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} data={data}></Route>
            // }
            // else {
                // console.error("UNDEF");
              return <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} data={data}></Route>
            // }



        })
    };


    render() {

        const linksRoutes = this.props.linksRoutes;

        const data = this.props.data;

        // console.error(data);

        return (
            <div>
                {this.generateLinks(linksRoutes)}
                {/*{ React.cloneElement(this.props.children, this.props) }*/}
                {/*<Switch>*/}
                {this.generateRutes(linksRoutes, data)}
                {/*<IndexRoute componenet={PhotoGrid}/>*/}
                {/*</Switch>*/}
            </div>
        );
    }
}

export default NavigationF;
