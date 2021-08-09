module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'paint': "url('/src/assets/paint.jpg')",
                'stars': "url('/src/assets/stars.jpg')",
                'tree': "url('/src/assets/Tree.jpg')",
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
