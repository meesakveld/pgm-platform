import React, { useEffect, useState } from 'react'

import TopSection from '../components/TopSection'
import GridLayout from '../components/GridLayout'

import { useQuery } from '@apollo/client'
import { GET_ALL_DATA_FOR_OPLEIDING_PAGE } from '../graphql/opleiding-queries'

export default function Opleiding() {

    const [programmaLines, setProgrammaLines] = useState([])
    const [page, setPage] = useState({})
    const [image, setImage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_DATA_FOR_OPLEIDING_PAGE)

    useEffect(() => {
        if (!data) return
        setProgrammaLines(data.programmaLines)
        setPage(data.pages[0])
        setImage(data.values)
    }, [data])

    const description = "In het Graduaat Programmeren leer je programmeren en staat front-end web development centraal. Jouw lessen worden doorspekt met interactieve oefeningen. Je krijgt opdrachten om nieuwe leerstof snel onder de knie te krijgen. Werkplekleren en jouw stage zijn samen goed voor meer dan 1.200 uur aan praktijkervaring. Hierna ben je meer dan klaar voor de arbeidsmarkt."

    return (

        <main className="max-w-200 mx-auto">

            <TopSection title="Opleiding" description={description} />
            
            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            {data && data.programmaLines && 
                <div className="p-6">

                    <h2 className="font-manuka text-6xl sm:text-8xl uppercase mb-8 sm:mb-16">Hoe ziet de opleiding er uit?</h2>
                
                    <div className="grid gap-8 sm:gap-12 sm:grid-cols-2">
                        {programmaLines.map((line, index) => (
                            <div key={line.id} className={index === programmaLines.length - 1 ? (index + 1)/2 !== 0 ? 'col-span-2' : '' : ''}>
                                <h3 className="font-manuka text-4xl sm:text-6xl uppercase mb-2 sm:mb-4">{line.title}</h3>
                                <p>{line.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }





        </main>

    )
}
