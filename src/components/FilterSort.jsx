import React from 'react'
import { chevronDown } from '../assets/icons/index.js'


export default function FilterSort({ filter, setFilter, sort, setSort, courses}) {

    const handleSortClick = () => {
        sort === "newest" ? setSort("oldest") : setSort("newest")
    }

    return (
        <div className="m-6 p-6 bg-gray-200 text-[#243542]">

            <div className="font-shareTechMono text-2xl flex justify-between">
                <p>Filter</p>
                <button onClick={handleSortClick} className="flex items-center gap-2"><img src={chevronDown} alt="chevron down" className={`h-4 w-4 ${sort === "newest" ? "" : "rotate-180"}`} />Sorteer</button>
            </div>

            <hr className="my-4 border-t-black" />

            <div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-y-3 sm:gap-x-0">
                    
                    <div className='filter-line w-full sm:w-1/2 lg:w-1/3'>
                        <input type="radio" id="all" name="filter" value="all" checked={filter === "all"} onChange={() => setFilter("all")} />
                        <label htmlFor="all">Alle projecten</label>
                    </div>

                    {courses && courses.map((course, index) => {
                        return (
                            <div key={index} className="filter-line w-full sm:w-1/2 lg:w-1/3">
                                <input type="radio" id={course.slug} name="filter" value={course.slug} checked={filter === course.slug} onChange={() => setFilter(course.slug)} />
                                <label htmlFor={course.slug}>{course.title}</label>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}
