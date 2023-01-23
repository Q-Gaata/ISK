const hiddenElements = document.querySelectorAll('.hidden')
const valueDisplays = document.querySelectorAll(".quantity")

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
  })

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

window.addEventListener('scroll', () => {
    const introImg = document.querySelector('#introduction img');

    introImg.classList.toggle('rotate', window.scrollY > 300)
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el))


valueDisplays.forEach(valueDisplay => {
    let interval = 1000;
    // let division = 900
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) clearInterval(counter)
    }, duration);
});