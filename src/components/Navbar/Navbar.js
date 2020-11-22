import React from 'react';
import logo from '../../images/Group 86.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="122" height="84" alt="" loading="lazy"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{border:'none'}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse nav-style " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Contact Us</a>
                        </li>
                        </ul>
                    </div>
                </nav>
        </div>
    );
};

export default Navbar;