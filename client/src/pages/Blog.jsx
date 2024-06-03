import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import TopSection from '../components/TopSection'
import ListLayout from '../components/ListLayout'

import { useQuery } from '@apollo/client'
import { GET_ALL_BLOG_POSTS } from '../graphql/blog-queries'

export default function Blog() {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_BLOG_POSTS)

    useEffect(() => {
        if (!data) return
        const formattedPosts = data.blogPosts.map(post => {
            return {
                ...post,
                publishedAt: formatDate(post.publishedAt)
            };
        });
        setPosts(formattedPosts)
        setPage(data.pages[0])
    }, [data])

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('nl-NL', options)
    }

    return (

        <main className="max-w-200 mx-auto">

            <Helmet>
                <title>{`${page.title} | Graduaat Programmeren`}</title>
                <meta name="description" content={page.description} />
            </Helmet>

            <TopSection title={page.title} description={page.description} />

            { loading && <p className='p-6'>Loading...</p> }
            { error && <p className='p-6'>Error: {error.message}</p> }

            <ListLayout data={posts} left='title' right='publishedAt' isLink={true} />

        </main>

    )
}
