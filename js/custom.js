$('.besten-angebote-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.sonderangebot-slider').owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    
})

$('.nolan-slider').owlCarousel({
    items: 1,
    loop:true,
    nav:false,
    dots: true,
    // autoplay: true
})

$('.rv-marken-slider').owlCarousel({
    items: 6,
    loop:true,
    nav:true,
    autoplay: true,
    dots: false
})

