import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import HospitalsDisplay from '../../displays/HospitalsDisplay/HospitalsDisplay'
import { GET_ALL_HOSPITALS } from '../../queries/hospital.query'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'

const HospitalsComponent = () => {
    const { loading, error, data } = useQuery(GET_ALL_HOSPITALS)

    return (
        <LayoutComponent>
            {loading && <SpinnerDisplay />}
            {error && <ErrorDisplay />}
            {data && data.hospitals.map(hospital => <HospitalsDisplay hospital={hospital} />)}
        </LayoutComponent>
    )
}

export default HospitalsComponent
