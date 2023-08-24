/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                softblue: "#5468E7",
                softviolet: "#C897E4",
                darkblue: "#232340",
                desaturatedblue: "#7676B2",
                offwhite: "#F5F5F5",
                lightorange: "#FFBA79",
                grayishblue: "#D1ECFD",
            },
            fontFamily: {
                deca: "LexendDeca",
            },
            backgroundImage: {
                "hero-image": "url('assets/images/Hero.svg')",                
            },
            backgroundPosition: {
                "right-1": "right 2rem",
            },
        },
    },
    plugins: [],
};
