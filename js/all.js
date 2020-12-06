(function($) {
    $(function() {
      
      $('ul.form__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.form__tabs').find('div.form__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);