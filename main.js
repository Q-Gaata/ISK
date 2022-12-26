var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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

