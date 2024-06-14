import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import parse, { attributesToProps, domToReact } from 'html-react-parser'

import { GET_PORTFOLIO_PROJECT_BY_SLUG } from '../graphql/portfolio-queries'
import { GET_BLOG_POST_BY_SLUG } from '../graphql/blog-queries'
import { GET_SERVICE_BY_SLUG } from '../graphql/services-queries'

import arrow from '../assets/icons/arrow.svg'

export default function ArticlePage() {

    const { slug } = useParams()
    const articleType = window.location.href.split("/")[3]

    let query = null
    if (articleType === "portfolio") query = GET_PORTFOLIO_PROJECT_BY_SLUG;
    else if (articleType === "services") query = GET_SERVICE_BY_SLUG;
    else if (articleType === "blog") query = GET_BLOG_POST_BY_SLUG;

    const { loading, error, data } = useQuery(query, {
        variables: { slug }
    })

    const [article, setArticle] = useState(null)

    useEffect(() => {
        if (!data) return
        setArticle(data.article[0])
    }, [data]);

    const options = {
        replace(domNode) {
            if (domNode.attribs && domNode.name === "h2") {
                const props = attributesToProps(domNode.attribs);
                return <h2 className='font-manuka text-4xl sm:text-6xl uppercase mt-8' {...props}>{domToReact(domNode.children, options)}</h2>
            }
        }
    }

    return (

        <main className='max-w-200 mx-auto p-6 flex flex-col gap-8'>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {article &&
                <Link to={`/${articleType}`} className='flex gap-4 items-center'>
                    <span className='block bg-black' style={{ transform: `rotate(180deg)`, height: 31, width: 31, maskImage: `url("${arrow}")`, maskRepeat: 'no-repeat', maskPosition: 'center' }}></span>
                    <p>{articleType.charAt(0).toUpperCase() + articleType.slice(1)}</p>
                </Link>
            }

            {article && article.banner &&
                <>
                    <img src={article.banner.url} alt={article.title} className="mx-auto w-full shadow-lg" />
                </>
            }

            {article &&
                <>
                    <Helmet>
                        <title>{`${article.title} | Graduaat Programmeren`}</title>
                    </Helmet>

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-manuka uppercase text-7xl sm:text-8xl mb-6'>{article.title}</h1>
                        <div className='flex flex-col gap-6'>
                            {article.content && parse(article.content.html, options)}
                        </div>
                    </div>
                </>
            }

        </main>
    )
}
