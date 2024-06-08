import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeArea = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // —————————— Dark Mode ——————————
    useEffect(() => {
        const mode = sessionStorage.getItem("isDarkMode")
        if (mode) setIsDarkMode(mode === 'true') 
    }, [])

    useEffect(() => {
        document.querySelector('html').toggleAttribute('dark-mode')
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
            {children}
        </ThemeContext.Provider>
    )

}