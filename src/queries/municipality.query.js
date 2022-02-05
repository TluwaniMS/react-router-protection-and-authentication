import { gql } from '@apollo/client'

export const GET_ALL_MUNICIPALITIES = gql`
    query GetAllMunicipalities {
        municipalities {
            id
            municipalityName
            hospitalsCount
        }
    }
`
