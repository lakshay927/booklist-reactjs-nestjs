/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                nato: ['Noto Sans', 'sans-serif'],
            },
            maxWidth: {
                '1/2': '375px',
            },
        },
    },
    plugins: [],
}
