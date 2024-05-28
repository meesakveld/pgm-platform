import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

export default function CLink({ url, text, arrowDeg }) {


    return (
        <Link to={url} className='gap-4 items-center flex w-fit'>
            <span className='block bg-black' style={{transform: `rotate(${arrowDeg}deg)`, height: 31, width: 31, maskImage: `url("${arrow}")`, maskRepeat: 'no-repeat', maskPosition: 'center'}}></span>
            <p className="inline-block font-shareTechMono text-xl">{text}</p>
        </Link>
    )
}
