import React from 'react'
import './NavBarComponent.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSignOutAlt, faUserMd, faHospitalAlt, faHospital } from '@fortawesome/free-solid-svg-icons'
import { signOut } from '../../services/authentication-service'
import { useNavigate } from 'react-router-dom'

const NavBarComponent = ({ userIsLoggedIn }) => {
    const navigate = useNavigate()

    const logOut = () => {
        signOut()
        navigate('/sign-in')
    }

    return (
        <div className="main-nav-bar-container">
            <Link to={`/`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHome} />
                <span className="nav-item-label">Home</span>
            </Link>
            <Link to={`/doctors`} className="nav-bar-item">
                <FontAwesomeIcon icon={faUserMd} />
                <span className="nav-item-label">Doctors</span>
            </Link>
            <Link to={`/hospitals`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHospital} />
                <span className="nav-item-label">Hospitals</span>
            </Link>
            <Link to={`/municipalities`} className="nav-bar-item">
                <FontAwesomeIcon icon={faHospitalAlt} />
                <span className="nav-item-label">Municipalities</span>
            </Link>
            <Link to={`/users`} className="nav-bar-item">
                <FontAwesomeIcon icon={faUser} />
                <span className="nav-item-label">Users</span>
            </Link>
            {userIsLoggedIn && (
                <div onClick={() => logOut()} className="nav-bar-item">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="nav-item-label">Sign out</span>
                </div>
            )}
        </div>
    )
}

export default NavBarComponent
