import React from 'react';

const TeamItem = ({team}) => {
    const {price, type, page, supportDay} = team;
    return (         
        <div className="col-md-4 pb-5 px-4">
            <div className="team-item bg-white shadow mx-2 pt-5 pb-4 rounded">
                <span className="font-weight-bold">${price}</span>
                <p>For {type}</p>
                <div className="line mb-3 mx-auto"></div>
                <p>Homepage</p>
                <p>{page} Inner Page</p>
                <p>Asset file</p>
                <p>Source file</p>
                <p>Free Stock Photos</p>
                <p>{supportDay} Days Free Support</p>
                <p>24/7 Support</p>
                <button className="btn gradient-btn team-btn radius-btn invisible mt-4">Order Now</button>
            </div>
        </div>
    );
};

export default TeamItem;