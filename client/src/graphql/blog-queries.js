import { gql } from '@apollo/client';

/**
 * Retrieves all portfolio projects and related information.
 *
 * @returns {object} The result of the GraphQL query.
 */
export const GET_ALL_BLOG_POSTS = gql`
    query getBlogPosts {
        blogPosts {
            title
            slug
            publishedAt
        }
        pages(where: { slug: "blog" }) {
            title
            description
        }
    }
`

export const GET_BLOG_POST_BY_SLUG = gql`
    query getBlogPostBySlug($slug: String = "") {
        blogPosts(where: { slug: $slug }) {
            title
            slug
            content {
                html
            }
        }
        pages(where: { slug: "blog" }) {
            title
            description
        }
    }
`