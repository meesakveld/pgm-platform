import { gql } from '@apollo/client';

export const GET_ALL_DATA_FOR_HOME_PAGE = gql`
query getHomePageData {
    portfolioItems: portfolioPages(first: 5) {
      slug
      id
      banner {
        url
      }
    }
    portfolio: pages(where: {slug: "portfolio"}) {
      title
      description
    }
    blog: blogPosts(first: 3) {
      title
      slug
      id
      publishedAt
    }
    services: services(first: 3) {
      title
      slug
      id
    }
  }  
`