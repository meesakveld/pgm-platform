import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import TopSection from '../components/TopSection'
import ListLayout from '../components/ListLayout'
import GridLayout from '../components/GridLayout'

import searchIcon from '../assets/icons/search.png'

import { GET_ALL_SEARCH_RESULTS } from '../graphql/search-queries'

export default function Search() {

    const query = new URLSearchParams(window.location.search).get('query')

    const [searchValue, setSearchValue] = useState(query)

    const [searchResultsPortfolio, setSearchResultsPortfolio] = useState([])
    const [searchResultsBlog, setSearchResultsBlog] = useState([])
    const [searchResultsServices, setSearchResultsServices] = useState([])
    const [searchResultsEmployees, setSearchResultsEmployees] = useState([])

    const navigate = useNavigate();

    // —————————— Search ——————————
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        navigate("/search?query=" + searchValue)
    }

    // —————————— Fetch data ——————————
    const { loading, error, data } = useQuery(GET_ALL_SEARCH_RESULTS, {
        variables: { searchTerm: searchValue }
    })

    useEffect(() => {
        if (query === "" || !data) return
        const formattedEmployees = data.employees.map(employee => {
            return {
                ...employee,
                functions: employee.functions.join(', ')
            }
        })
        setSearchResultsEmployees(formattedEmployees)

        setSearchResultsPortfolio(data.portfolio)

        const formattedPosts = data?.blog.map(post => {
            return {
                ...post,
                publishedAt: formatDate(post.publishedAt)
            };
        });
        setSearchResultsBlog(formattedPosts || [])

        setSearchResultsServices(data.services)
    }, [data, searchValue])

    // —————————— Convert date ——————————
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('nl-NL', options)
    }

    return (
        <main className='max-w-200 mx-auto'>

            <TopSection title="Search" />

            <section className='p-6'>

                <form className='relative' onSubmit={handleSearchSubmit}>
                    <input onChange={handleSearch} className="w-full pr-11 rounded-full  p-4 focus-visible:outline-red text-[#243542]" type="text" placeholder="Search" />
                    <button className="absolute top-1/2 transform  -translate-x-1/2 -translate-y-1/2 left-auto right-0"><img src={searchIcon} alt="search" /></button>
                </form>

            </section>

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            <section className='p-6 flex flex-col gap-8'>

                {searchResultsPortfolio.length >= 1 &&

                    <div>

                        <h2 className='font-manuka text-5xl uppercase sm:text-6xl'>Portfolio Resultaten</h2>

                        <div className='flex flex-col gap-16'>
                            {searchResultsPortfolio.map((project, index) => {
                                return (

                                    <Link key={`portfolioItem-${index}`} to={`/portfolio/${project.slug}`}>

                                        <article className="flex gap-8 flex-col sm:flex-row">

                                            <div className="w-full sm:w-1/2">
                                                <img src={project.banner.url} alt={project.title} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="flex flex-col gap-2 sm:gap-6 justify-center basis-1/2">

                                                <h2 className="font-manuka text-5xl uppercase sm:text-6xl">{project.title}</h2>

                                                <p>{project.description}</p>

                                                {project.course?.title && <p className="font-shareTechMono text-lg">{project.course?.title}</p>}

                                            </div>

                                        </article>

                                    </Link>

                                )
                            })}
                        </div>

                    </div>

                }

                {searchResultsBlog.length >= 1 &&

                    <div>

                        <h2 className='font-manuka text-5xl uppercase sm:text-6xl'>Blog Resultaten</h2>

                        <ListLayout data={searchResultsBlog} left='title' right='publishedAt' isLink={true} />

                    </div>
                }

                {searchResultsServices.length >= 1 &&

                    <div>

                        <h2 className='font-manuka text-5xl uppercase sm:text-6xl'>Services Resultaten</h2>

                        <GridLayout data={searchResultsServices} itemToDisplay='title' />

                    </div>
                }

                {searchResultsEmployees.length >= 1 &&

                    <div>

                        <h2 className='font-manuka text-5xl uppercase sm:text-6xl'>Team Resultaten</h2>

                        <ListLayout data={searchResultsEmployees} left='name' right='functions' isLink={false} />

                    </div>

                }

                {!searchResultsPortfolio && !searchResultsBlog && !searchResultsServices && !searchResultsEmployees &&

                    <p>No results found</p>

                }

            </section>
        </main>
    )
}
