import React from 'react'
import { useQuery } from '@apollo/client'
import LayoutComponent from '../layout-component/LayoutComponent'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import UsersDisplay from '../../displays/UsersDisplay/UsersDisplay'
import { GET_ALL_USERS } from '../../queries/users.query'
import ErrorDisplay from '../../displays/ErrorDisplay/ErrorDisplay'

const UsersComponent = () => {
    const { loading, error, data } = useQuery(GET_ALL_USERS)

    return (
        <LayoutComponent>
            {loading && <SpinnerDisplay />}
            {error && <ErrorDisplay />}
            {data && (
                <div className="main-display-content-container">
                    {data.users.map(user => (
                        <div className="card" key={user.id}>
                            <UsersDisplay user={user} />
                        </div>
                    ))}
                </div>
            )}
        </LayoutComponent>
    )
}

export default UsersComponent
