$(function () {
    'use strict';

    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('hamburger--active');
        $('.hamburger__menu').toggleClass('hamburger__menu--active');
        $('body').toggleClass('overflow-hidden');
    })

})(jQuery);
