window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-cont')
    const navLi = document.querySelectorAll('nav li a')
    const btn = document.querySelector('nav .btn')


    navLi.forEach(el => {
        if(window.scrollY > 0){
            el.style.color = 'white'

        } else {
            el.style.color = '#002147'
        }
    })

    btn.style.color = '#002147'
    nav.classList.toggle('scroll', window.scrollY > 50)
})