$(document).ready(function () {
    svg4everybody({});
    vendorSlider();
    mobileMenu();
    feedbackFooter();

});

function vendorSlider () {
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

function mobileMenu () {
    var opener = $('.js-burger'),
        menu = $('.js-menu');

    opener.on('click', function (e) {
        e.preventDefault();
        menu.slideDown();
    });

    $(document).click(function(event) {
        target = $(event.target);
        if(!target.closest(menu).length &&
            target[0] != opener[0] && menu.is(":visible"))  {
            menu.slideUp();
        }
    });

}

function feedbackFooter () {
    var opener = $('.js-feedback-opener'),
        feedback = $('.js-feedback');

    opener.on('click', function (e) {
        e.preventDefault();
        feedback.show();
    });

    $(document).click(function(event) {
        target = $(event.target);
        console.log(feedback, target)

        if(!target.closest(feedback).length && target[0] != opener[0] && feedback.is(":visible"))  {
            feedback.hide();
        }
    });

}
