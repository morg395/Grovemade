$(function() {
    var toUp = $('.footer__up');

    toUp.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    })
})