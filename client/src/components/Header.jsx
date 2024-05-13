import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { ROUTES } from '../routes/routes'

import pgmLogo from '../assets/pgm-logo.svg'
import { close, menu, moon, sun, search } from '../assets/icons'

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext)


    // —————————— Dark Mode ——————————
    // Check if dark mode is enabled in session storage
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

    return (
        <header>
            <div>
                <Link to="/" className='logo'><img src={pgmLogo} alt="PGM Logo" /></Link>
                <div className='hamburgermenu'>
                    <div className='submenu'>
                        <Link to="/search">
                            <form action=''>
                                <input type="text" placeholder="Search"></input>
                                <button><img src={search} alt="search" /></button>
                            </form>
                        </Link>
                        <button onClick={handleThemeClick}><img src={isDarkMode ? sun : moon} /></button>
                    </div>
                    <button><img src={menu} alt="Menu" /></button>
                </div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
                        <li><NavLink to={ROUTES.opleiding.path}>{ROUTES.opleiding.title}</NavLink></li>
                        <li><NavLink to={ROUTES.portfolio.path}>{ROUTES.portfolio.title}</NavLink></li>
                        <li><NavLink to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink></li>
                        <li><NavLink to={ROUTES.services.path}>{ROUTES.services.title}</NavLink></li>
                        <li><NavLink to={ROUTES.team.path}>{ROUTES.team.title}</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
