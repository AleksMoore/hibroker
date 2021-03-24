(function($) {
  $(function() {
    
    $('ul.form__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.form__tabs').find('div.form__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
})(jQuery);


  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});