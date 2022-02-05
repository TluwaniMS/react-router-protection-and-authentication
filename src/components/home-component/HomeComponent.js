import React from 'react'
import LayoutComponent from '../layout-component/LayoutComponent'
import { useQuery } from '@apollo/client'
import { GET_SUMMARISED_DIRECTORY_STATS } from '../../queries/directory-stats.query'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'

const HomeComponent = () => {
    const { loading, error, data } = useQuery(GET_SUMMARISED_DIRECTORY_STATS)

    return (
        <LayoutComponent>
            <div>Home view works!!</div>
        </LayoutComponent>
    )
}

export default HomeComponent
