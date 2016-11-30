import $ from 'jquery';

let active = null;

$('.accordion__title').click(function () {
    if ($(this).is(active)) {
        $(this).removeClass('accordion__title_active');
        active = null;
    } else {
        $('.accordion__title_active').removeClass('accordion__title_active');
        $(this).addClass('accordion__title_active');
        active = $(this);
    }
});
