import React from 'react'
import './AuthenticationResponseDisplay.css'
import { AuthenticationErrorType } from '../../display-support/authentication-error-type'

const AuthenticationResponseDisplay = ({ authenticationErrorType }) => {
    const InvalidCredentialsDisplay = (
        <div className="response-error-display-container server-error-alert">
            There was a server erro, please try again later
        </div>
    )
    const ServerErrorDisplay = (
        <div className="response-error-display-container invalid-credentials-alert">
            The user name or password submitted is incorrect
        </div>
    )

    return (
        <div>
            {AuthenticationErrorType.ServerError === authenticationErrorType && InvalidCredentialsDisplay}
            {AuthenticationErrorType.InvalidCredentialsError === authenticationErrorType && ServerErrorDisplay}
        </div>
    )
}

export default AuthenticationResponseDisplay
