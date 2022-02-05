import React from 'react'
import './NavBarComponent.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faSignInAlt,
    faSignOutAlt,
    faUserMd,
    faHospitalAlt,
    faHospital
} from '@fortawesome/free-solid-svg-icons'

const NavBarComponent = () => {
    return (
        <div className="main-nav-bar-container">
            <Link to={`/`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to={`/doctors`} className="nav-bar-item">
                <FontAwesomeIcon icon={faUserMd} />
            </Link>
            <Link to={`/hospitals`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHospital} />
            </Link>
            <Link to={`/municipalities`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHospitalAlt} />
            </Link>
            <Link to={`/users`} className="nav-bar-item">
                <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={`/sign-in`} className="nav-bar-item">
                <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
            <div className="nav-bar-item">
                <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
        </div>
    )
}

export default NavBarComponent
