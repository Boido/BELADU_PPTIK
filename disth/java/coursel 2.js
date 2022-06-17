$('.owl-carousel-2').OwlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            itmes: 1,
        },
        700:{
            itmes: 2,
        },
        1100:{
            itmes: 3,
            loop:false;
        }
    }
});