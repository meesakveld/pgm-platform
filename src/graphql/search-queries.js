import { gql } from '@apollo/client';

export const GET_ALL_SEARCH_RESULTS = gql`
    query getSearchResults($searchTerm: String = "") {
        portfolio: portfolioPages(
            where: {
                OR: [
                    { title_contains: $searchTerm },
                    { description_contains: $searchTerm },
                    { course: { title_contains: $searchTerm } }
                ]
            }
        ) {
            title
            slug
            description
            id
            banner {
                url
            }
            course {
                title
            }
        }
        employees: employees(
            where: {
                OR: [
                    { name_contains: $searchTerm },
                ]
            }
        ) {
            name
            functions
            id
        }
        services: services(
            where: {
                OR: [
                    { title_contains: $searchTerm }
                ]
            }
        ) {
            title
            slug
            id
        },
        blog: blogPosts(
            where: {
                OR: [
                    { title_contains: $searchTerm }
                ]
            }
        ) {
            title
            slug
            id
            publishedAt
        }
    }
`