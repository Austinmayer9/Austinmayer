module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'paint': "url('/src/assets/paint.jpg')",
                'stars': "url('/src/assets/stars.jpg')",
                'tree': "url('/src/assets/Tree.jpg')",
                'beach': "url('/src/assets/City Beach Pier2_1.5.2.jpg')",
                'Sigma': "url('/src/assets/Sigma VSCO-min.jpg')",
            }),
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
            },
        },
    },
    variants: {
      
        extend: {
            translate: ['group-hover'],
            display: ['group-hover'],
            zIndex: ['group-hover'],
        },
    },
    plugins: [],
}
