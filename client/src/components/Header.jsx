import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { ROUTES } from '../routes/routes'

import pgmLogo from '../assets/pgm-logo.svg'
import { close, menu, moon, sun, search } from '../assets/icons'

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();

    // —————————— Dark Mode ——————————
    useEffect(() => {
        setIsDarkMode(sessionStorage.getItem("isDarkMode") === 'true' ? true : false)
    }, [])

    useEffect(() => {
        document.querySelector('html').toggleAttribute('dark-mode')
    }, [isDarkMode])

    const handleThemeClick = () => {
        setIsDarkMode(!isDarkMode)
        sessionStorage.setItem("isDarkMode", !isDarkMode)
    }

    // —————————— Hamburger Menu ——————————
    const handleMenuClick = () => {
        const main = document.querySelector('main')
        const footer = document.querySelector('footer')

        if (main) main.style.display = isMenuOpen ? 'block' : 'none'
        if (footer) footer.style.display = isMenuOpen ? 'block' : 'none'

        setIsMenuOpen(!isMenuOpen)
    }

    // —————————— Search ——————————
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        navigate("/search?query=" + searchValue)
        setSearchValue('')
        handleMenuClick()
    }

    return (
        <header className={`max-w-200 mx-auto p-6`}>

            <div className="flex justify-between">

                <Link to="/" className='logo w-16'><img src={pgmLogo} alt="PGM Logo" /></Link>

                <div className='hamburgermenu flex gap-8'>

                    <div className={`submenu ${!isMenuOpen ? 'hidden' : ''} flex items-center gap-4`}>

                        <form onSubmit={handleSearchSubmit} className='
                            w-14 
                            h-14 
                            bg-white 
                            rounded-full 
                            flex 
                            justify-center 
                            items-center 
                            
                            group
                            hover:md:w-72

                            transition-all
                            duration-300

                            relative
                        '>
                            <input value={searchValue} onChange={handleSearch} className='
                                    hidden
                                    group-hover:md:block
                                    group-hover:md:w-full
                                    group-hover:md:pr-11

                                    rounded-full 
                                    p-4
                                    focus-visible:outline-red

                                    text-[#243542]
                                    '
                                type="text" placeholder="Search">
                            </input>

                            <button className="
                                hidden
                                md:block

                                absolute 
                                left-1/2 
                                top-1/2 
                                transform 
                                -translate-x-1/2 
                                -translate-y-1/2

                                group-hover:md:left-auto
                                group-hover:md:right-0
                                "
                                ><img className='w-6' src={search} alt="search" />
                            </button>
                            <Link to="/search" className='
                                md:hidden

                                absolute 
                                left-1/2 
                                top-1/2 
                                transform 
                                -translate-x-1/2 
                                -translate-y-1/2

                                group-hover:md:left-auto
                                group-hover:md:right-0
                            '>
                                <img className='w-6' src={search} alt="search" />
                            </Link>
                        </form>

                        <button className="w-14 h-14 bg-white rounded-full flex justify-center items-center" onClick={handleThemeClick}><img className='w-6' src={isDarkMode ? sun : moon} /></button>
                    </div>

                    <button className="bg-white w-18 h-18 flex justify-center items-center rounded-full" onClick={handleMenuClick}><img src={isMenuOpen ? close : menu} alt="Menu" className="w-8" /></button>
                </div>

            </div>

            <div>
                <nav className={!isMenuOpen ? 'hidden' : ''}>
                    <ul className='
                        font-manuka 
                        text-8xl
                        sm:text-9xl
                        uppercase
                        
                        grid 
                        grid-rows-6 
                        sm:grid-rows-3 
                        grid-flow-col 
                        
                        mt-16'
                    >
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.opleiding.path}>{ROUTES.opleiding.title}</NavLink></li>
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.portfolio.path}>{ROUTES.portfolio.title}</NavLink></li>
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink></li>
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.services.path}>{ROUTES.services.title}</NavLink></li>
                        <li onClick={handleMenuClick}><NavLink className='hover:opacity-70 transition-all duration-300' to={ROUTES.team.path}>{ROUTES.team.title}</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
