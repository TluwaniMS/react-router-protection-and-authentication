export const signOut = () => {
    sessionStorage.removeItem('sessionToken')
    sessionStorage.removeItem('userInformation')
    sessionStorage.removeItem('sessionIsActive')
}

export const setSessionInformation = (sessionToken, userSessionData) => {
    sessionStorage.setItem('sessionToken', sessionToken)
    sessionStorage.setItem('userInformation', userSessionData)
    sessionStorage.setItem('sessionIsActive', true)
}

export const getUserData = () => {
    const userData = sessionStorage.getItem('userInformation')

    return userData
}

export const getSessionToken = () => {
    const sessionToken = sessionStorage.getItem('sessionToken')

    return sessionToken
}

export const checkIfSessionIsActive = () => {
    const sessionIsActive = sessionStorage.getItem('sessionIsActive')

    return sessionIsActive
}
