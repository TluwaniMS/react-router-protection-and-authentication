import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import HospitalsDisplay from '../../displays/HospitalsDisplay/HospitalsDisplay'
import { GET_ALL_HOSPITALS } from '../../queries/hospital.query'

const HospitalsComponent = () => {
    return <LayoutComponent></LayoutComponent>
}

export default HospitalsComponent
