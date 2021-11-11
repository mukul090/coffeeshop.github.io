let language = document.querySelector('.language');
let lang = document.querySelector('.lang');

language.addEventListener('click', () => {
    language.classList.toggle('.language');
    lang.classList.toggle('active');
});


let currency = document.querySelector('.currency');
let cur = document.querySelector('.cur');


currency.addEventListener('click', () => {
    language.classList.toggle('.currency');
    cur.classList.toggle('active');
});





let account = document.querySelector('.account');
let acc = document.querySelector('.acc');


account.addEventListener('click', () => {
    language.classList.toggle('.account');
    acc.classList.toggle('active');
});




let barbox = document.querySelector('.barbox');
let navbar = document.querySelector('.navbar');

barbox.addEventListener('click', () => {
    barbox.classList.toggle('.barbox');
    navbar.classList.toggle('active');
});


let bar = document.querySelector('#bar');
let navbars = document.querySelector('.navbars');
let times = document.querySelector('#times');

bar.addEventListener('click', () => {
    bar.classList.toggle('#bar');
    navbars.classList.toggle('active');
});

times.addEventListener('click', () => {
    bar.classList.toggle('#times');
    navbars.classList.remove('active');
});




let dots = document.querySelector('.dots');
let dotbox = document.querySelector('.dot-box');


dots.addEventListener('click', () => {
    dots.classList.toggle('.dots');
    dotbox.classList.toggle('active');
});





var swiper = new Swiper(".container", {
    slidesPerView: 5,

    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 5,
        },
    },


    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,


    },
    loop: true,

});



var swiper = new Swiper(".news-slide", {
    loop: true,
    slidesPerView: 3,
    autoplay: {

        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },
    },
});





var swiper = new Swiper(".brand-slider", {
    loop: true,
    slidesPerView: 5,
    autoplay: {

        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 4,

        },
        1024: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 5,
        },

    },
});