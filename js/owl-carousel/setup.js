$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assista() {
    window.location.href="https://www.youtube.com/watch?v=9fIObnIGMlI";
}
function saibaMais() {
    window.location.href="https://www.themoviedb.org/movie/671-harry-potter-and-the-philosopher-s-stone";
}