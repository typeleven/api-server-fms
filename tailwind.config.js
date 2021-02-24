const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    darkest: '#1f2d3d',
                    dark: '#3c4858',
                    DEFAULT: colors.blue[500],
                    light: '#e0e6ed',
                    lightest: '#f9fafc',
                },
                secondary: {
                    darkest: '#1f2d3d',
                    dark: '#3c4858',
                    DEFAULT: '#c0ccda',
                    light: '#e0e6ed',
                    lightest: '#f9fafc',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
