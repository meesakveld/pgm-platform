import { gql } from '@apollo/client';

export const GET_ALL_BLOG_POSTS = gql`
    query getBlogPosts {
        blogPosts {
            title
            slug
            id
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
        article: blogPosts(where: { slug: $slug }) {
            title
            slug
            content {
                html
            }
        }
    }
`