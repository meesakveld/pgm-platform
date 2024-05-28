import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TopSection from '../components/TopSection'

import { useQuery } from '@apollo/client'
import { GET_ALL_SERVICES } from '../graphql/service-queries'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function Services() {

    loadDevMessages(); loadErrorMessages();

    const [services, setServices] = useState([])
    const [page, setPage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_SERVICES)

    useEffect(() => {
        if (!data) return
        setServices(data.services)
        setPage(data.pages[0])
    }, [data])

    const bordercolor = () => { 
        return Math.floor(Math.random() * 3) === 0 ? 'border-red' : Math.floor(Math.random() * 3) === 1 ? 'border-pink' : 'border-blue' 
    }

    return (

        <main className="max-w-200 mx-auto">

            <TopSection title={page.title} description={page.description} />

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {services.map((service) => (

                    <article key={service.slug} className={`p-6 border-2 font-shareTechMono text-2xl sm:text-3xl w-full ${bordercolor()}`}>

                        <Link to={`/services/${service.slug}`} className="flex h-80 flex-wrap content-end">
                            <h2>{service.title}</h2>
                        </Link>

                    </article>
                ))}

            </div>

        </main>

    )
}