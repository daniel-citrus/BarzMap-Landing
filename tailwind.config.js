/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#005A9C',
                    'primary-hover': '#004C86',
                    accent: '#00C853',
                    dark: '#1F2933',
                    'dark-muted': '#111927',
                    background: '#F5F7FA',
                    highlight: '#FFA726',
                    light: '#FFFFFF',
                    footer: '#1A1A1A',
                },
            },
            boxShadow: {
                'brand-xl': '0 25px 50px -12px rgba(17, 25, 39, 0.35)',
            },
        },
    },
    plugins: [],
};
