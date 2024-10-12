
$(document).ready(function () {

    // 
    $('.besten-angebote-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
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

    })

    $('.nolan-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        // autoplay: true
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