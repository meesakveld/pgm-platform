import React from 'react'
import { Link } from 'react-router-dom'

export default function ListLayout({ data, left, right, isLink }) {

    const Item = isLink ? Link : 'div'

    return (
        <div className="p-6">
            {data.map((item, index) => (
                <article key={item.id} className={`border-t-2 px-6 border-black ${index === data.length - 1 ? 'border-b-2' : ''}`}>
                    <Item to={`/blog/${item.slug}`} className="flex flex-col sm:flex-row justify-between my-8 gap-2 sm:gap-8 sm:items-center">
                        <h2 className="sm:basis-4/6">{item[left]}</h2>
                        <p className="shrink-0">{item[right]}</p>
                    </Item>
                </article>
            ))}
        </div>
    )
}
