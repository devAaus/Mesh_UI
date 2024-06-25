"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Set the theme based on localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        }
        setMounted(true)
    }, [setTheme])

    // Save the theme to localStorage whenever it changes
    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    if (!mounted) {
        // Prevent rendering until theme is loaded
        return null
    }

    return (
        <label className="inline-flex items-center relative" htmlFor="toggle">
            <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <div
                className="relative w-[55px] h-[25px] bg-gray-500 peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[2.5px] after:left-[3px] active:after:w-[20px] peer-checked:after:left-[52px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
            ></div>
            <Sun className="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[5px]" />
            <Moon className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[5px]" />
        </label>
    )
}

export default ThemeToggle
