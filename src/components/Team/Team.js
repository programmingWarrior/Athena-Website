import React from 'react';
import TeamItem from './TeamItem';

const teamItem = [
    {
        price: 199,
        type: "Basic",
        page: "No",
        SupportDay: 10
    },
    {
        price: 399,
        type: "Preferred",
        page: 4,
        SupportDay: 20
    },
    {
        price: 599,
        type: "Elite",
        page: 8,
        SupportDay: 30
    }
]
const Team = () => {
    return (
        <section className="text-center contact container pt-5 mt-5">
            <h1 className="header">Choose Your Dedicated Team</h1>
            <div className="row py-5">
                {
                    teamItem.map((item, idx) => <TeamItem key={idx} team={item}/>)
                }
            </div>
        </section>
    );
};

export default Team;