
var swiper = new Swiper('.swiper', {
   
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        999: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    }
});