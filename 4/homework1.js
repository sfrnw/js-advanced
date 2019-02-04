(function($) {
    $(function() {  $('ul.class0').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.class2').removeClass('active').eq($(this).index()).addClass('active');
    });
    });
})(jQuery);