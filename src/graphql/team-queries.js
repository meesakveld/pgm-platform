import { gql } from '@apollo/client';

export const GET_ALL_EMPLOYEES = gql`
    query getEmployees {
        employees {
            name
            functions
            id
        }
        pages(where: { slug: "team" }) {
            title
            description
        }
    }
`