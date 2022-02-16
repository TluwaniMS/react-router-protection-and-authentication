import React from 'react'
import NavBarComponent from '../nav-bar-component/NavBarComponent'
import { Navigate } from 'react-router-dom'
import { checkIfSessionIsActive } from '../../services/authentication-service'

const LayoutComponent = ({ pageTitle, children }) => {
    const sessionIsactive = checkIfSessionIsActive()

    return (
        <div>
            <NavBarComponent />
            {sessionIsactive ? children : <Navigate to={'/sign-in'} />}
        </div>
    )
}

export default LayoutComponent
