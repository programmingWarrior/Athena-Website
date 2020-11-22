import React from 'react';
import logo from '../../images/Group 86.png';
import facebook from '../../images/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../images/twitter (4)@2x.png';
import linkedin from '../../images/linkedin (2)@2x.png';
import dribble from '../../images/dribbble (1)@2x.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="container pt-5">
            <div className="row d-flex ">
                <div className="col-md-5 text-center text-sm-left">
                    <img className="logo" src={logo} alt=""/>
                    <div className="mt-3 social-icon">
                        <a href=""><img src={facebook} alt=""/></a>
                        <a href=""><img src={twitter} alt=""/></a>
                        <a href=""><img src={linkedin} alt=""/></a>
                        <a href=""><img src={dribble} alt=""/></a>
                    </div>
                </div>
                <div className="row col-md-6 link-text mt-4 text-sm-left text-center">
                    <div className="col-md-4 mb-3">
                        <a href="">Features</a>
                        <br/>
                        <a href="">Enterprise</a>
                        <br/>
                        <a href="">Pricing</a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <a href="">Blog</a>
                        <br/>
                        <a href="">Help Center</a>
                        <br/>
                        <a href="">Contact Us</a>
                        <br/>
                        <a href="">Status</a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <a href="">About Us</a>
                        <br/>
                        <a href="">Terms of Service</a>
                        <br/>
                        <a href="">Security</a>
                        <br/>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;