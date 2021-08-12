import React, { Component } from 'react';
import Login from './LoginComponent';

class Home extends Component {
    render(){
    return (
        <div className="container">
            <Login />
        </div>
    );
}
}

export default Home;