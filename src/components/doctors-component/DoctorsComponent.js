import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import DoctorsDisplay from '../../displays/DoctorsDisplay/DoctorsDisplay'
import { GET_ALL_DOCTORS } from '../../queries/doctors.query'

const DoctorsComponent = () => {
    return <LayoutComponent></LayoutComponent>
}

export default DoctorsComponent
