import React from 'react'

import pgmImage from '../assets/pgm-image-1.png'
import deco1 from '../assets/decoration/deco-1.svg'
import deco2 from '../assets/decoration/deco-2.svg'

export default function Home() {
    return (

        <main className='max-w-200 mx-auto'>

            <section className='mt-8 p-6'>

                <div className='uppercase font-manuka relative z-20'>
                    <p className="text-pink text-4xl sm:text-6xl">Graduaat</p>
                    <h1 className='text-6xl sm:text-9xl relative drop-shadow-lg' style={{top: "-1rem"}}>Programmeren</h1>
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

            <section className='relative -top-16'>
                <img src={deco2} alt="Decoration" className="h-40 ml-auto" />
                <img src={deco1} alt="Decoration" className="h-40" />
            </section>

            <section>

            </section>

        </main>

    )
}
