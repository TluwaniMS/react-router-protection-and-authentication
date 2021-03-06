import { gql } from '@apollo/client'

export const GET_ALL_DOCTORS = gql`
    query GetAllDoctors {
        doctors {
            id
            name
            surname
            email
            specialty
            gender
        }
    }
`
