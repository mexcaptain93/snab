$(document).ready(function () {
    svg4everybody({});
    vendorSlider();
    mobileMenu();
    feedbackFooter();
    searchForm();

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

        if(!target.closest(feedback).length && target[0] != opener[0] && feedback.is(":visible"))  {
            feedback.hide();
        }
    });

}

function searchForm() {
    var openerMob = $('.js-search-mob-opener'),
        searchMob =  $('.js-search-mob'),
        opener = $('.js-search-opener'),
        search =  $('.js-search');

    openerMob.on('click', function (e) {
        e.preventDefault();
        searchMob.show();
    });

    opener.on('click', function (e) {
        e.preventDefault();
        search.show();
    });

    $(document).click(function(event) {
        target = $(event.target);
        if(!target.closest(search).length && target[0] != opener[0] && search.is(":visible"))  {
            search.hide();
        }
        if(!target.closest(searchMob).length && target[0] != openerMob[0] && searchMob.is(":visible"))  {
            searchMob.hide();
        }
    });
}