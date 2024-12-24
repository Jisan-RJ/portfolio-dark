
document.addEventListener('scroll', ()=> {
    let nav = document.querySelector('.nav')

    if (window.scrollY > 0) {
        nav.classList.add('shade')
        
    } else {
        nav.classList.remove('shade')
        
    }
})