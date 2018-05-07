(function($) {
  $(document).ready(function() {
    /* ===================
      * Pivot animation
      * =================== */
    var pivotDelay = 200, pivotEnterTimeout, pivotLeaveTimeout;
    var overlay = $('.overlay');
    
    $('.bw-button, .bw-container').hover(function() {
      var pivot = $(this).parent();
      clearTimeout(pivotLeaveTimeout);
      
      pivotEnterTimeout = setTimeout(function() {
        pivot.addClass('active');
        overlay.show();
      }, pivotDelay);
    }, function() {
      var pivot = $(this).parent();
      clearTimeout(pivotEnterTimeout);
      
      pivotLeaveTimeout = setTimeout(function() {
        pivot.removeClass('active');
        overlay.hide();
      }, pivotDelay);
    });
    
    /* hack for preventing html fire close event */
    $('.bw-container').on('click', function(e) {
      e.stopPropagation();
    });

    /* ===================
     * Toggle accordion
     * =================== */
    $('.panel-header').on('click', function() {
      $(this).parent().toggleClass('expanded');
      $(this).siblings('.panel-body').slideToggle(400);
    });
    
    /* ===================
     * Open certain panel
     * =================== */
    var id = window.location.hash;
    $(id).addClass('expanded');
    $(id).children('.panel-body').slideToggle(400);

    /* ===================
     * Change tab
     * =================== */
    $('.top-navigation-menu__link').on('click', function(e) {
      e.preventDefault();

      var targetId = $(this).attr('data-target');

      if(!$(targetId).hasClass('active')) {
        $('.tp-container.active').removeClass('active');
        $(targetId).addClass('active');
      }
    });
    
  });
})(jQuery);
