/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // This covers all subfolders in src
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    light: '#f6d1a5',
                    DEFAULT: '#d4a373',
                    dark: '#68432e',
                },
            },
        },
    },
    plugins: [],
}