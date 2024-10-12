// Mobile menu js
const header = document.getElementById('rv-header')
const mobileContent = document.getElementById('mobile-content');
const mobileIcon = document.getElementById('mobile-icon');
const mobileClose = document.getElementById('close-icon');
mobileIcon.addEventListener('click',mobileMenuShow);
mobileClose.addEventListener('click',mobileMenuHide);
function mobileMenuShow() {
    header.style.overflow = 'visible';
    mobileContent.style.transform = 'translate(0)';
    document.body.classList.add('dark-background');
    document.body.classList.style.overflow = 'hidden';
}
function mobileMenuHide() {
    setTimeout(() => {header.style.overflow = 'hidden';},300)
    mobileContent.style.transform = 'translate(100%)';
    document.body.classList.remove('dark-background');
    document.body.classList.style.overflow = 'visible';
}



// All slider js
$(document).ready(function () {

    $('.mobile-menu-slider').owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        autoplay: true,
        margin: 10
    })

    $('.besten-angebote-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        responsive: {
            320: {
                items: 1
            },
            576: {
                items: 1.5,
            },
            768: {
                items: 2.5,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 2.5,
            },
            1400: {
                items: 3
            }
        }
    })

    $('.sonderangebot-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
    })

    $('.nolan-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true
    })

    $('.rv-marken-slider').owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }

    })


});


