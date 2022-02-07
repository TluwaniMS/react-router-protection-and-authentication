import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import DoctorsDisplay from '../../displays/DoctorsDisplay/DoctorsDisplay'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'
import { GET_ALL_DOCTORS } from '../../queries/doctors.query'

const DoctorsComponent = () => {
    const { loading, error, data } = useQuery(GET_ALL_DOCTORS)

    return (
        <LayoutComponent>
            {loading && <SpinnerDisplay />}
            {error && <ErrorDisplay />}
            {data && (
                <div className="main-display-content-container">
                    {data.doctors.map(doctor => (
                        <div className="card" key={doctor.id}>
                            <DoctorsDisplay doctor={doctor} />
                        </div>
                    ))}
                </div>
            )}
        </LayoutComponent>
    )
}

export default DoctorsComponent
