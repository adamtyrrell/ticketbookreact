import Header from './HeaderComponenet';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import Login from './LoginComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        );
    };
}

export default Main;

