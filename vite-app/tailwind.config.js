module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'paint': "url('/src/assets/paint.jpg')",
                'stars': "url('/src/assets/stars.jpg')",
            }),
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
            },
        },
    },
    variants: {
      
        extend: {},
    },
    plugins: [],
}
