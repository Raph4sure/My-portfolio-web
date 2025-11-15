/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                playwrite: ['"Playwrite CA"', "cursive"],
                signika: ["Signika", "sans-serif"],
                mona: ['"Mona Sans"', "sans-serif"],
            },
            colors: {
                "text-primary": "var(--color-text-primary)",
                "text-secondary": "var(--color-text-secondary)",
                "text-accent": "var(--color-text-accent)",
                "white-50": "var(--color-white-50)",
                "black-50": "var(--color-black-50)",
                "black-100": "var(--color-black-100)",
                "black-200": "var(--color-black-200)",
                "blue-50": "var(--color-blue-50)",
                "blue-100": "var(--color-blue-100)",
                "pink-button": "var(--color-pink-button)",
                "pink-button-hover": "var(--color-pink-button-hover)",
            },
        },
    },
    plugins: [],
};
