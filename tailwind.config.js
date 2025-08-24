/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                phone: { max: "640px" },
                tablet: { max: "900px" },
                laptop: { max: "1200px" },
                desktop: { max: "1920px" },
            },
            colors: {
                "grey-l1": "#666666",
                "blue-l1": "rgb(69, 92, 233)",
                "white-l1": "rgb(255, 255, 255)",
                "black-l1": "rgb(41, 41, 41)",
                "grey-l2": "rgb(153, 153, 153)",
                "white-50": "#d9ecff",
                "black-50": "#1c1c21",
                "black-100": "#0e0e10",
                "black-200": "#282732",
                "blue-50": "#839cb5",
                "blue-100": "#2d2d38",
            },
            fontFamily: {
                sans: ['"Mona Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
