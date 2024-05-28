import { gql } from '@apollo/client';

export const GET_ALL_DATA_FOR_OPLEIDING_PAGE = gql`
    query getDataForOpleidingPage {
        programmaLines {
            title
            description
            id
        }
        pages(where: { slug: "opleiding" }) {
            title
            description
        }
        image: asset(where: {id: "clwq8n8v60r8t07urdvnj4x8x"}) {
            description
            title
            url
            id
        }
    }
`