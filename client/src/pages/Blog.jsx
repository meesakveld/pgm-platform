import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TopSection from '../components/TopSection'

import { useQuery } from '@apollo/client'
import { GET_ALL_BLOG_POSTS } from '../graphql/blog-queries'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import ListLayout from '../components/ListLayout'

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

    // dateformating -> 1 mei 2012
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('nl-NL', options)
    }

    return (

        <main className="max-w-200 mx-auto">

            <TopSection title={page.title} description={page.description} />

            { loading && <p className='p-6'>Loading...</p> }
            { error && <p className='p-6'>Error: {error.message}</p> }

            <ListLayout data={posts} left='title' right='publishedAt' isLink={true} />

        </main>

    )
}
