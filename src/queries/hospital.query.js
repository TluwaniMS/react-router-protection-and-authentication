import { gql } from '@apollo/client'

export const GET_ALL_HOSPITALS = gql`
    query GetAllHospitals {
        hospitals {
            id
            hospitalName
            doctorsCount
        }
    }
`
