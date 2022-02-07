import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import MunicipalitiesDisplay from '../../displays/MunicipalitiesDisplay/MunicipalitiesDisplay'
import { GET_ALL_MUNICIPALITIES } from '../../queries/municipality.query'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'

const MunicipalitiesComponent = () => {
    const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES)

    return (
        <LayoutComponent>
            {loading && <SpinnerDisplay />}
            {error && <ErrorDisplay />}
            {data && (
                <div className="main-display-content-container">
                    {data.municipalities.map(municipality => (
                        <div className="card" key={municipality.id}>
                            <MunicipalitiesDisplay municipality={municipality} />
                        </div>
                    ))}
                </div>
            )}
        </LayoutComponent>
    )
}

export default MunicipalitiesComponent
