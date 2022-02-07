import React from 'react'

const MunicipalitiesDisplay = ({ municipality }) => {
    return (
        <div>
            <div className="card-container-info-container">{municipality.municipalityName}</div>
        </div>
    )
}

export default MunicipalitiesDisplay
