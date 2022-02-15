export const signOut = () => {
    sessionStorage.removeItem('sessionToken')
    sessionStorage.removeItem('userInformation')
}

export const setSessionInformation = (sessionToken, userSessionData) => {
    sessionStorage.setItem('sessionToken', sessionToken)
    sessionStorage.setItem('userInformation', userSessionData)
}

export const getUserData = () => {
    const userData = sessionStorage.getItem('userInformation')

    return userData
}

export const getSessionToken = () => {
    const sessionToken = sessionStorage.getItem('sessionToken')

    return sessionToken
}
