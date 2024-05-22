import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TopSection from '../components/TopSection'
import FilterSort from '../components/FilterSort'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { useQuery } from '@apollo/client'
import { GET_ALL_PORTFOLIO_PROJECTS, GET_ALL_PORTFOLIO_PROJECTS_BY_COURSE } from '../graphql/portfolio-queries'

export default function Portfolio() {

    loadDevMessages()
    loadErrorMessages()

    const [filter, setFilter] = useState("all")
    const [sort, setSort] = useState("newest")

    const [projects, setProjects] = useState([])
    const [courses, setCourses] = useState([])
    const [page, setPage] = useState({})

    const query = filter === "all" ? GET_ALL_PORTFOLIO_PROJECTS : GET_ALL_PORTFOLIO_PROJECTS_BY_COURSE
    const param = filter !== "all" ? { variables: { courseSlug: filter } } : undefined

    const { loading, error, data } = useQuery(query, param)

    useEffect(() => {
        if (!data) return
        setProjects(data.portfolioPages)
        setCourses(data.courses)
        setPage(data.pages[0])
    }, [data])

    useEffect(() => {
        if (sort === "newest") {
            setProjects(prevProjects => [...prevProjects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        } else {
            setProjects(prevProjects => [...prevProjects].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        }
    }, [sort]);

    return (

        <main className="max-w-200 mx-auto">

            {page && <TopSection title={page.title} description={page.description} />}

            {courses &&
                <FilterSort filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} courses={courses} />
            }

            <div className='p-6 flex flex-col gap-16'>
                {projects && projects.map((project, index) => {
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

        </main>

    )
}