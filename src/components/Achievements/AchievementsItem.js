import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AchievementsItem = ({achievement}) => {
    const{icon, count, title} = achievement;

    return (
        <div className="col-md-6">
            <div className="bg-white achievementItem d-flex align-items-center radius-div py-4 mb-4 justify-content-center">
                <FontAwesomeIcon className="mr-4" style={{fontSize:"60px"}} icon={icon} />
                <div>
                    <h2 className="font-weight-bold">{count}+</h2>
                    <p style={{fontSize:"17px"}}>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementsItem;