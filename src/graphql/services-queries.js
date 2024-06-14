import { gql } from '@apollo/client';

export const GET_ALL_SERVICES = gql`
    query getServices {
        services {
            title
            slug
            id
        }
        pages(where: { slug: "services" }) {
            title
            description
        }
    }
`

export const GET_SERVICE_BY_SLUG = gql`
    query getServiceBySlug($slug: String = "") {
        article: services(where: { slug: $slug }) {
            title
            slug
            content {
                html
            }
        }
    }
`