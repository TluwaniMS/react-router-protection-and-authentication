import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import MunicipalitiesDisplay from '../../displays/MunicipalitiesDisplay/MunicipalitiesDisplay'
import { GET_ALL_MUNICIPALITIES } from '../../queries/municipality.query'

const MunicipalitiesComponent = () => {
    return <LayoutComponent></LayoutComponent>
}

export default MunicipalitiesComponent
