import React, { Component }  from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">TicketBook</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;