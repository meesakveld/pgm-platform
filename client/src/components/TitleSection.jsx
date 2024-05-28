import React from 'react'
import { Link } from 'react-router-dom'
import CLink from './CLink'

export default function TitleSection({ title, TitleTag, description, url, urlText }) {
    return (
        <div className='sm:flex gap-16 items-end mt-6 mb-20'>
            <TitleTag className="font-manuka text-6xl sm:text-8xl uppercase">{title}</TitleTag>
            <div className='flex flex-col gap-6'>
                <p>{description}</p>
                { url && urlText &&
                    <CLink url={url} text={urlText} arrowDeg={0} />
                }
            </div>
        </div>
    )
}
