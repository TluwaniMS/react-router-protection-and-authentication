import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import UsersDisplay from '../../displays/UsersDisplay/UsersDisplay'
import { GET_ALL_USERS } from '../../queries/users.query'

const UsersComponent = () => {
    return <LayoutComponent></LayoutComponent>
}

export default UsersComponent
