import $ from 'jquery';

let activeTab = $('.tabs__title_active').data('tab-id');

openTab(activeTab);

$('.tabs__title').click(function () {
    activeTab = $(this).data('tab-id');

    $('.tabs__title_active').removeClass('tabs__title_active');
    $(this).addClass('tabs__title_active');
    $('.tabs__content_active').removeClass('tabs__content_active');

    openTab(activeTab);
});

function openTab(tabId) {
    $('.tabs__body').find($(`[data-tab-id="${tabId}"]`)).addClass('tabs__content_active');
}
