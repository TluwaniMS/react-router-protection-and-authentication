import React from 'react'

const DoctorsDisplay = ({ doctor }) => {
    return (
        <div>
            <div className="card-container-info-container">{doctor.name}</div>
        </div>
    )
}

export default DoctorsDisplay
