import React from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">

                    </div>

                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:123-456-7890"><i className="fa fa-phone" /> 123-456-7890</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> support@ticketbook.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;