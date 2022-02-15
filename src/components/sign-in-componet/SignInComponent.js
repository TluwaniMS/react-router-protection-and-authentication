import React, { useState } from 'react'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SpinnerDisplay from '../../displays/SpinnerDisplay/SpinnerDisplay'
import LayoutComponent from '../layout-component/LayoutComponent'
import { AUTHENTICATION } from '../../mutations/authentication.mutation'
import { AuthenticationCheck } from '../../display-support/authentication-support'
import './SignInComponent.css'
import { useNavigate } from 'react-router-dom'

const SignInComponent = () => {
    const [invalidLoginCredentialsSubmitted, setLoginCredentialStatus] = useState(false)
    const [serverError, setServerStatus] = useState(false)

    const navigate = useNavigate()

    const [authenticateUserWithPassword, { data, loading, error }] = useMutation(AUTHENTICATION)

    const schema = yup.object({
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        password: yup.string().required('Password is required')
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) })

    const resetFormFields = () => reset()

    const login = data => {
        authenticateUserWithPassword({ variables: { email: data.email, password: data.password } })
        reset()
    }

    if (data) {
        switch (data.authenticateUserWithPassword.__typename) {
            case AuthenticationCheck.AuthenticationSuccessful:
                navigate('/')
            default:
                setLoginCredentialStatus(true)
        }
    }

    if (error) {
        setServerStatus(true)
    }

    return (
        <LayoutComponent>
            <div className="main-login-form-container">
                <div className="login-form-container">
                    <form onSubmit={handleSubmit(login)} className="form-input-container">
                        <div className="input-container">
                            <input placeholder="email" className="input" {...register('email')}></input>
                            {errors.email?.message}
                        </div>
                        <div className="input-container">
                            <input
                                placeholder="password"
                                type="password"
                                className="input"
                                {...register('password')}
                            ></input>
                            {errors.password?.message}
                        </div>
                        <div className="login-button-container">
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default SignInComponent
