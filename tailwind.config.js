/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#fff",
                "secondary": "rgb(245 245 245)",
                "tertiary": "rgb(240 240 240)",
                "text-primary": "#000",
                "text-secondary": "rgb(100 100 100)",
            },
        },
    },
    plugins: [],
}
