/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                anor: {
                    red: '#D61F26',
                    dark: '#A51318',
                    light: '#FDF2F2',
                }
            }
        },
    },
    plugins: [],
}