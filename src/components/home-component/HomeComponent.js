import React from 'react'
import LayoutComponent from '../layout-component/LayoutComponent'
import { useQuery } from '@apollo/client'
import { GET_SUMMARISED_DIRECTORY_STATS } from '../../queries/directory-stats.query'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import HomePageDisplay from '../../displays/HomePageDisplay/HomePageDisplay'

const HomeComponent = () => {
    const { loading, error, data } = useQuery(GET_SUMMARISED_DIRECTORY_STATS)

    return (
        <LayoutComponent>
            {loading && <SpinnerDisplay />}
            {error && <ErrorDisplay />}
            {data && <HomePageDisplay />}
        </LayoutComponent>
    )
}

export default HomeComponent
