import { createContext, useEffect, useState } from "react";

const getInitialTheme = (): string => {
    if (typeof window !== undefined && window.localStorage) {
        const colorPrefers = window.localStorage.getItem("color-theme")

        if (typeof colorPrefers === "string") return colorPrefers

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) return "dark"
    }
    // default theme
    return "light"
}

type ContextType = {
    children: React.ReactNode
    initialTheme: string
}

type ThemeStateType = {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeStateType>({} as ThemeStateType)

const ThemeProvider = ({ children, initialTheme }: ContextType) => {
    const [theme, setTheme] = useState<string>(getInitialTheme)

    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider