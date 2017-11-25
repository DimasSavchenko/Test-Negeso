jQuery(document).ready(function($) {
    initInsta();
});

jQuery(window).on('load', function() {
    mobileNav.init('.header__menu');
});

var mobileNav = {
    className: '.js_mobile-nav',
    mobileMenuClassName: '.mobile-nav__menu',
    activeClass: 'open',
    init: function(mainMenuClassName) {
        if (!$(this.mobileMenuClassName).children().length) {
            $(mainMenuClassName).children().clone().prependTo(this.mobileMenuClassName);
        }

        $(document).on('click', '.burger', function() {
            mobileNav.toggle();
        });
    },
    open: function() {
        $(this.className).addClass(this.activeClass);
    },
    close: function() {
        $(this.className).removeClass(this.activeClass);
    },
    toggle: function() {
        $(this.className).hasClass(this.activeClass) ? this.close() : this.open();
    }
};

function initInsta() {
    var $insta = $('.insta');
    var dataImg;

    $insta.on('click', function() {
        if ($(event.target).hasClass('insta__item')) {
            dataImg = $(event.target).data('img');
            $('.modal').addClass('open');
            $('.modal__body').css({ 'background-image': 'url(' + dataImg + ')' });
        }
    })

    $('.modal').on('click', function() {
        $('.modal').removeClass('open');
    });
}