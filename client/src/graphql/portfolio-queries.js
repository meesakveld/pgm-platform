import { gql } from '@apollo/client';

export const GET_ALL_PORTFOLIO_PROJECTS = gql`
    query getPortfolioProjects {
        portfolioPages {
            title
            slug
            description
            createdAt
            banner {
                url
            }
            course {
                title
                slug
            }
        }
        pages(where: { slug: "portfolio" }) {
            title
            description
        }
        courses(where: { portfolioPages_some: {} }) {
            title
            slug
        }
    }
`

export const GET_ALL_PORTFOLIO_PROJECTS_BY_COURSE = gql`
    query getPortfolioProjectsByCourse($courseSlug: String = "") {
        portfolioPages(where: { course: { slug: $courseSlug } }) {
            title
            slug
            description
            createdAt
            banner {
                url
            }
        }
        pages(where: { slug: "portfolio" }) {
            title
            description
        }
        courses(where: { portfolioPages_some: {} }) {
            title
            slug
        }
    }
`

/**
 * Retrieves portfolio project data by slug.
 *
 * @param {string} slug - The slug of the portfolio project.
 * @returns {object} - The portfolio project data.
 */
export const GET_PORTFOLIO_PROJECT_BY_SLUG = gql`
    query getPortfolioProjectsBySlug($slug: String = "") {
        portfolioPages(where: { slug: $slug }) {
            title
            slug
            description
            banner {
                url
            }
            content {
                html
            }
        }
        pages(where: { slug: "portfolio" }) {
            title
            slug
        }
    }
`