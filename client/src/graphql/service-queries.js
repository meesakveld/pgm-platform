import { gql } from '@apollo/client';

/**
 * Retrieves all portfolio projects and related information.
 *
 * @returns {object} The result of the GraphQL query.
 */
export const GET_ALL_SERVICES = gql`
    query getServices {
        services {
            title
            slug
        }
        pages(where: { slug: "service" }) {
            title
            description
        }
    }
`

export const GET_SERVICE_BY_SLUG = gql`
    query getBlogPostBySlug($slug: String = "") {
        blogPosts(where: { slug: $slug }) {
            title
            slug
            content {
                html
            }
        }
        pages(where: { slug: "service" }) {
            title
            description
        }
    }
`