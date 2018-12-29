$(function () {
    $('.language').on('click', function () {
        $(this).children('span').toggleClass('active')
        $('.language').toggleClass('active');
    })
    $('.user-type .radio').on('click', function () {
        $(this).toggleClass('active').siblings().toggleClass('active')
    })

    $('.main .appointment-record-evaluation .container .row .star span').on('click', function (e) {
        e.preventDefault();
        if ($('.evaluation-list-disabled').length == 0) {
            $(this).siblings('.color').css('width', ($(this).index() + 1) * 20 + '%')
        }
    })

    $('.js_layout').on('click', function () {
        $('.msg-layout-success').fadeIn();
        setTimeout(() => {
            $('.msg-layout-success').fadeOut();
        }, 3000);
    })


    $('.select-hospital').on('click', '.scroll span,.list .item,.type .item', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.footer-layout .item').on('click', function (e) {
        $(this).siblings().removeClass('active').find('.drop-down').slideUp();
        $(this).toggleClass('active')
        if ($(this).hasClass('child')) {
            e.preventDefault();
            $(this).children('.drop-down').slideToggle();
            $('.full-background').one('click', function () {
                $('.footer-layout .item .drop-down').slideUp();
                $('.footer-layout .item').removeClass('active');
            })
            return false;
        }
    })

    document.querySelector('.swiper .swiper-container') && new Swiper('.swiper .swiper-container', {
        autoplay: 5000,
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
    })
})
