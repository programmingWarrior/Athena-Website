import React from 'react';
import AchievementsItem from './AchievementsItem.js';
// import happy from '../../images/happy@2x.png';
// import marketing from '../../images/marketing@2x.png';
// import surface from '../../images/surface1@2x.png';
// import transportation from '../../images/transportation@2x.png';
import { faLaugh, faStar } from '@fortawesome/free-regular-svg-icons';
import { faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';

const achievements = [
    {
        icon: faLaugh,
        count: 700,
        title: "Happy Clients"
    },
    {
        icon: faTrophy,
        count: 140,
        title: "Projects Completed"
    },
    {
        icon: faStar,
        count: 25,
        title: "Crazy Minds"
    },
    {
        icon: faRocket,
        count: 75,
        title: "Running Projects"
    }
]
const Achievements = () => {
    return (
        <div className="container py-5 mt-5 mx-auto">
            <div className="row">
                <div className="col-lg-5 py-4">
                    <h1>Our Achievements</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                </div>
                <div className="col-lg-7 row">
                    {
                        achievements.map((achievement, idx) => <AchievementsItem key={idx} achievement={achievement}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Achievements;