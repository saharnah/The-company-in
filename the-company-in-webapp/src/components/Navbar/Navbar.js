import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    The Company in
                </Link>
            </div>

        </div>
    </>
);


export default Navbar;
