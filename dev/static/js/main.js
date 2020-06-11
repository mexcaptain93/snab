$(document).ready(function () {
    svg4everybody({});
    vendorSlider();
});

function vendorSlider() {
    $('.js-vendor-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<a href="#" class="vendors__prev"></a>',
        nextArrow: '<a href="#" class="vendors__next"></a>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
}