import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import parse from 'html-react-parser'
import { GET_PORTFOLIO_PROJECT_BY_SLUG } from '../graphql/portfolio-queries'


export default function ArticlePage({ articleType }) {

    const { slug } = useParams()

    let query = null
    if (articleType === "portfolio") query = GET_PORTFOLIO_PROJECT_BY_SLUG

    const { loading, error, data } = useQuery(GET_PORTFOLIO_PROJECT_BY_SLUG, {
        variables: { slug }
    })

    return (
        <main>

        </main>
    )
}
