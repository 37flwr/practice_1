import React from 'react'

const TeamCard = ({ id, photo, name, position, email, phone }) => (
    <div className="team-item">
        <div className="team-item-container" key={id}>
            <img src={photo} alt="" className="team-item-img" />
            <div className="team-item-heading nunito">
                <span>
                    {name}
                </span>
            </div>
            <div className="team-item-details">
                <span className="team-item-text nunito">
                    {position}
                </span>
                <span className="team-item-text nunito">
                    {email}
                </span>
                <span className="team-item-text nunito">
                    {phone}
                </span>
            </div>
        </div>
    </div>
)

export default TeamCard