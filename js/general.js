const _hamburger = $('.hamburger');
const _navMenu = $('.header__nav');
const _scroll = $('.scroll');

_hamburger.on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        _navMenu.removeClass('active');
    } else {
        $(this).addClass('active');
        _navMenu.addClass('active');
    }
});

_scroll.on("click", function(e) {
    e.preventDefault();
    let _target = $(this).attr('href');
    let _offsetTop = $(_target).offset().top;
    _goto(_offsetTop - 40);
});

function _goto(_tar) {
    $("html,body").animate({
            scrollTop: _tar,
        },
        1000,
        "swing"
    );
}