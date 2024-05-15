import React from 'react'

import deco1 from '../assets/decoration/deco-1.svg'
import deco2 from '../assets/decoration/deco-2.svg'
import star from '../assets/decoration/star.svg'

export default function TopSection({ title, description = "" }) {
    return (
        <section>

            <img className="ml-auto h-40 transform -scale-y-100" src={deco2} alt="decoration" />

            <div className="p-6 relative sm:-top-8">

                <div className="relative w-fit">

                    <h1 className="font-manuka uppercase text-8xl sm:text-9xl mb-6">{title}</h1>

                    <img className="absolute top-0 -right-20 w-16 sm:-right-24 sm:w-20" src={star} alt="decoration" />
                </div>

                { description && 
                    <p className="md:w-3/5">{description}</p>
                }

            </div>

            <img className="h-40" src={deco1} alt="decoration" />

        </section>
    )
}
