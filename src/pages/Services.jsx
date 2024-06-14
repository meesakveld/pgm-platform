import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import TopSection from '../components/TopSection'
import GridLayout from '../components/GridLayout'

import { useQuery } from '@apollo/client'
import { GET_ALL_SERVICES } from '../graphql/services-queries'

export default function Services() {

    const [services, setServices] = useState([])
    const [page, setPage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_SERVICES)

    useEffect(() => {
        if (!data) return
        setServices(data.services)
        setPage(data.pages[0])
    }, [data])

    return (

        <main className="max-w-200 mx-auto">

            {page &&
                <>
                    <Helmet>
                        <title>{`${page.title} | Graduaat Programmeren`}</title>
                        <meta name="description" content={page.description} />
                    </Helmet>

                    <TopSection title={page.title} description={page.description} />
                </>
            }

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            <GridLayout data={services} itemToDisplay='title' />

        </main>

    )
}