import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import TopSection from '../components/TopSection'

import { useQuery } from '@apollo/client'
import { GET_ALL_EMPLOYEES } from '../graphql/team-queries'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import ListLayout from '../components/ListLayout'

export default function Team() {

    loadDevMessages(); loadErrorMessages();

    const [employees, setEmployees] = useState([])
    const [page, setPage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_EMPLOYEES)

    useEffect(() => {
        if (!data) return
        const formattedEmployees = data.employees.map(employee => {
            return {
                ...employee,
                functions: employee.functions.join(', ')
            }
        })
        setEmployees(formattedEmployees)
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

            <ListLayout data={employees} left='name' right='functions' isLink={false} />

        </main>

    )
}