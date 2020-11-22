import React from 'react';
import Navbar from '../Navbar/Navbar';
import bannerImg from '../../images/16 [Converted]@2x.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 banner-text">
                        <h1 className="banner-text-header">Florence agency</h1>
                        <p className="banner-text-small"><small>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                        </p>
                        <button className="banner-btn">See Pricing</button>
                    </div>
                    <div className="col-sm-12 col-md-6 banner-img">
                        <img src={bannerImg} alt="" height="486" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;