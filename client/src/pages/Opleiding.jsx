import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import TopSection from '../components/TopSection'

import { useQuery } from '@apollo/client'
import { GET_ALL_DATA_FOR_OPLEIDING_PAGE } from '../graphql/opleiding-queries'

import deco3 from '../assets/decoration/deco-3.svg'
import TitleSection from '../components/TitleSection'

export default function Opleiding() {

    const [programmaLines, setProgrammaLines] = useState([])
    const [page, setPage] = useState({})
    const [image, setImage] = useState({})

    const { loading, error, data } = useQuery(GET_ALL_DATA_FOR_OPLEIDING_PAGE)

    useEffect(() => {
        if (!data) return
        setProgrammaLines(data.programmaLines)
        setPage(data.pages[0])
        setImage(data.image)
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

            {programmaLines &&
                <div className="p-6">

                    <h2 className="font-manuka text-6xl sm:text-8xl uppercase mb-8 sm:mb-16">Hoe ziet de opleiding er uit?</h2>

                    <div className="flex flex-col gap-12 sm:grid sm:gap-12 sm:grid-cols-2">
                        {programmaLines.map((line, index) => (
                            <div key={line.id} className={index === programmaLines.length - 1 ? (index + 1) / 2 !== 0 ? 'col-span-2' : '' : ''}>
                                <h3 className="font-manuka text-4xl sm:text-6xl uppercase mb-2 sm:mb-4">{line.title}</h3>
                                <p>{line.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {programmaLines && image &&
                <div className='flex my-20 justify-between'>
                    <img src={deco3} alt="decoration" className="h-20" />
                    <img src={deco3} alt="decoration" className="h-20 hidden sm:block" />
                </div>
            }

            {image &&

                <div className='p-6'>
                    <TitleSection title={image.title} TitleTag='h2' description={image.description} />

                    <img src={image.url} alt={image.title} className="w-full" />
                </div>
            }



        </main>

    )
}
