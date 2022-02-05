import React from 'react'
import NavBarComponent from '../nav-bar-component/NavBarComponent'

const LayoutComponent = ({ pageTitle, children }) => {
    return (
        <div>
            <NavBarComponent />
            {children}
        </div>
    )
}

export default LayoutComponent
