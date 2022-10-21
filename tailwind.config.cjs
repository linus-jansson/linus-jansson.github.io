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
                "secondary": "#f7f7f7",
                "textPrimary": "#f5f5f5",
                "textSecondary": "#999",
            },
        },
        plugins: [],
    }
}