import React from 'react'

const UsersDisplay = ({ user }) => {
    return (
        <div>
            <div className="card-container-info-container">{user.name}</div>
        </div>
    )
}

export default UsersDisplay
