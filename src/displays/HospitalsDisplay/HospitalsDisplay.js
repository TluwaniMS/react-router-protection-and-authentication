import React from 'react'

const HospitalsDisplay = ({ hospital }) => {
    return (
        <div>
            <div className="card-container-info-container">{hospital.hospitalName}</div>
        </div>
    )
}

export default HospitalsDisplay
