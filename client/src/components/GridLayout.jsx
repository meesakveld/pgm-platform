import React from 'react'
import { Link } from 'react-router-dom'

export default function GridLayout({ data, itemToDisplay }) {

    const bordercolor = () => { 
        return Math.floor(Math.random() * 3) === 0 ? 'border-red' : Math.floor(Math.random() * 3) === 1 ? 'border-pink' : 'border-blue' 
    }

    return (
        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {data.map((item) => (

                <article key={item.id} className={`p-6 border-2 font-shareTechMono text-2xl sm:text-3xl w-full ${bordercolor()}`}>

                    <Link to={`/services/${item.slug}`} className="flex h-80 flex-wrap content-end">
                        <h2>{item[itemToDisplay]}</h2>
                    </Link>

                </article>
            ))}

        </div>
    )
}
