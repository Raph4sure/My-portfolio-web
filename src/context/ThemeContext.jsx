
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const systemPref = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";

        const initialTheme = saved || systemPref;
        setTheme(initialTheme);

        // Apply theme to document root
        document.documentElement.classList.toggle(
            "dark",
            initialTheme === "dark"
        );
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme);
            // Apply theme to document root
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}