let nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if ( window.scrollY > 50 ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})