import { gql } from '@apollo/client'

export const GET_SUMMARISED_DIRECTORY_STATS = gql`
    query GetSummarisedDirectoryStats {
        doctorsCount
        hospitalsCount
        municipalitiesCount
    }
`
