import Header from './HeaderComponenet';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import Home from './HomeComponent';
import Portal from './PortalComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Citation from './CitationComponent';
import Report from './ReportComponent';


class Main extends Component {
    render() {
        const HomePage =() => {
            return (
                <Home />
            );
        }
        return (
            <React.Fragment>                
                <Header loggedIn ={this.props.loggedIn}/>
                <Switch>
                    <Route path='/home' component={HomePage} /> 
                    <Route path='/portal' component={Portal} /> 
                    <Route path='/citation' component={Citation} />
                    <Route path='/report' component={Report} />
                    <Redirect to='/home' />                 
                </Switch>                    
                
                             
            </React.Fragment>
        );
    };
}

export default Main;

