/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#fff",
                "secondary": "rgb(245 245 245)",
                "textPrimary": "#f5f5f5",
                "textSecondary": "#999",
                "darkPrimary": "#161616",
                "darkSecondary": "#202020",
                "darkTextPrimary": "#fff",
                "darkTextSecondary": "whitesmoke",
            },
        },
        plugins: [],
    }
}