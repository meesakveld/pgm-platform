import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import pgmImage from '../assets/pgm-image-1.png'
import deco1 from '../assets/decoration/deco-1.svg'
import deco2 from '../assets/decoration/deco-2.svg'
import deco3 from '../assets/decoration/deco-3.svg'

import TitleSection from '../components/TitleSection'
import GridLayout from '../components/GridLayout'
import ListLayout from '../components/ListLayout'
import CLink from '../components/CLink'

import { useQuery } from '@apollo/client'
import { GET_ALL_DATA_FOR_HOME_PAGE } from '../graphql/home-queries'


export default function Home() {

    const [blogPosts, setBlogPosts] = useState([])
    const [portfolioInfo, setPortfolioInfo] = useState({})
    const [portfolioItems, setPortfolioItems] = useState([])
    const [services, setServices] = useState([])

    const { loading, error, data } = useQuery(GET_ALL_DATA_FOR_HOME_PAGE)

    useEffect(() => {
        if (!data) return
        const formattedPosts = data.blog.map(post => {
            return {
                ...post,
                publishedAt: formatDate(post.publishedAt)
            };
        });
        setBlogPosts(formattedPosts)
        setPortfolioInfo(data.portfolio[0])
        setPortfolioItems(data.portfolioItems)
        setServices(data.services)
    }, [data]);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('nl-NL', options)
    }

    return (

        <main className='max-w-200 mx-auto'>

            <section className='mt-8 p-6'>

                <div className='uppercase font-manuka relative z-20'>
                    <p className="text-pink text-4xl sm:text-6xl">Graduaat</p>
                    <h1 className='text-6xl sm:text-9xl relative drop-shadow-lg' style={{ top: "-1rem" }}>Programmeren</h1>
                </div>

                <div className='sm:flex relative sm:justify-end'>
                    <div className='block w-44 h-44 bg-red rounded-full absolute -top-20 right-0 sm:right-[60%] sm:w-96 sm:h-96'></div> {/* circle */}
                    <img src={pgmImage} alt="Programmeren" className="w-full z-10 relative sm:w-2/3 shadow-lg sm:-top-20" />
                </div>

            </section>

            <section className='p-6 flex items-center gap-20 my-5'>

                <div className='flex flex-col gap-16 sm:basis-1/2'>
                    <div>
                        <h3 className="font-manuka uppercase text-6xl mb-2">Learning</h3>
                        <p>Tijdens het Graduaat Programmeren leer je het zichtbare (front-end) en onzichtbare (backend) deel van web- en mobiele toepassingen ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital agencies werken en wat jouw rol hierbinnen zal zijn. </p>
                    </div>

                    <div>
                        <h3 className="font-manuka uppercase text-6xl mb-2">By doing</h3>
                        <p>Om je toekomstige job echt te leren kennen, moet je het werkveld intrekken. Dat doe je in de programmalijn @Work. In het eerste jaar bezoek je een aantal digital agencies en voer je opdrachten voor hen uit. Je presenteert het resultaat vervolgens voor een interne en externe jury. In je tweede jaar ga je 10 weken lang werkplekleren in een digitaal bedrijf. Zo doe je praktische kennis op en ervaar je hoe het voelt om echt in team te werken. Tijdens een individueel afsluitend project dat je op de werkvloer uitvoert, verdiep je je bovendien in een onderwerp naar keuze.</p>
                    </div>
                </div>

                <div className='w-4'>
                    <h2 className='hidden sm:block font-manuka text-9xl uppercase basis-1/2'>Learning by doing</h2>
                </div>

            </section>

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            {portfolioInfo && portfolioItems.length > 0 &&
                <>
                    <section className='relative -top-16'>
                        <img src={deco2} alt="Decoration" className="h-40 ml-auto" />
                        <img src={deco1} alt="Decoration" className="h-40" />
                    </section>

                    <section className='p-6 mb-20'>
                        <TitleSection title={portfolioInfo.title} TitleTag="h2" description={portfolioInfo.description} url='/portfolio' urlText='Bekijk alle projecten' />

                        <div className="overflow-x-scroll flex gap-8 w-full h-56 relative">
                            {portfolioItems.map(item => (
                                <div key={item.id} className="flex-shrink-0">
                                    <Link to={`/portfolio/${item.slug}`}>
                                        <img src={item.banner.url} alt={item.slug} className="h-56" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            }

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            {blogPosts.length > 0 &&

                <>
                    <section>
                        <img src={deco1} alt="Decoration" className="h-40 ml-auto rotate-180" />
                        <img src={deco2} alt="Decoration" className="h-40 rotate-180" />
                    </section>

                    <section className='mt-6'>
                        <h2 className='font-manuka text-6xl sm:text-8xl uppercase text-center'>Blog</h2>
                        <ListLayout data={blogPosts} left='title' right='publishedAt' isLink={true} />
                        <CLink url='/blog' text='Bekijk alle blogposts' arrowDeg={-45} className="mx-auto my-8" />
                    </section>
                </>

            }

            {loading && <p className='p-6'>Loading...</p>}
            {error && <p className='p-6'>Error: {error.message}</p>}

            {services.length > 0 &&

                <>

                    <div className='flex my-20 justify-between'>
                        <img src={deco3} alt="decoration" className="h-20" />
                        <img src={deco3} alt="decoration" className="h-20 hidden sm:block" />
                    </div>

                    <section className='mt-6'>
                        <h2 className='p-6 font-manuka text-6xl sm:text-8xl uppercase'>Services</h2>
                        <GridLayout data={services} itemToDisplay='title' />
                        <CLink url='/services' text='Zie al onze services' arrowDeg={-45} className="mx-auto my-8" />
                    </section>

                </>

            }


        </main>

    )
}
