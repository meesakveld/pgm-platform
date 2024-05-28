import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TopSection from '../components/TopSection'

import { useQuery } from '@apollo/client'
import { GET_ALL_BLOG_POSTS, GET_BLOG_POST_BY_SLUG } from '../graphql/blog-queries'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function Blog() {
    
    loadDevMessages(); loadErrorMessages();

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_BLOG_POSTS)

    useEffect(() => {
        if (!data) return
        setPosts(data.blogPosts)
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

            <div className="p-6">
                { posts.map((post, index) => (
                    <article key={post.slug} className={`border-t-2 px-6 border-black ${index === posts.length - 1 ? 'border-b-2' : ''}`}>
                        <Link to={`/blog/${post.slug}`} className="flex flex-col sm:flex-row justify-between my-8 gap-2 sm:gap-8 sm:items-center">
                            <h2 className="sm:basis-4/6">{post.title}</h2>
                            <p className="shrink-0">{formatDate(post.publishedAt)}</p>
                        </Link>
                    </article>
                )) }
            </div>

        </main>

    )
}
