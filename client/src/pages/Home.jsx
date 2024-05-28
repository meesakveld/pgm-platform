import React from 'react'
import pgmImage from '../assets/pgm-image-1.png'
import CLink from '../components/CLink'

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

        </main>

    )
}
