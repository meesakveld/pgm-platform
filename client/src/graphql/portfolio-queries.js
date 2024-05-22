import { gql } from '@apollo/client';

/**
 * Retrieves all portfolio projects and related information.
 *
 * @returns {object} The result of the GraphQL query.
 */
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

/**
 * Retrieves all portfolio projects by course.
 *
 * @param {string} courseSlug - The slug of the course.
 * @returns {Object} - An object containing portfolio pages and general pages.
 */
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