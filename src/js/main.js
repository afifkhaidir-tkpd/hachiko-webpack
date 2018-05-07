$(document).ready(function(){

  /* =======================
    * Change CTA button link 
    * while parameter is given
    * ====================== */
  var url = new URL(window.location.href);
  var param = url.searchParams.get("mobile");
  if(param) {
    $('.btn-cta').attr('href', 'https://m.tokopedia.com/tokopoints/mobile/');
  }
  
  /* ===================
    * Toggle accordion
    * =================== */
  $('.panel-header').on('click', function() {
    $(this).parent().toggleClass('expanded');
    $(this).siblings('.panel-body').slideToggle(400);
  });

  /* ===================
   * Initialize slick
   * =================== */
  var $feature = $('#feature');
  var $howto = $('#howto');
  var feature_settings = {
    mobileFirst: true,
    arrows: true,
    prevArrow: '<a class="slick-prev"><img src="https://ecs7.tokopedia.net/assets/images/arrow/slick-arrow-left.svg" class="slick-arrow__img" alt="slider left"/></a>',
    nextArrow: '<a class="slick-next"><img src="https://ecs7.tokopedia.net/assets/images/arrow/slick-arrow-right.svg" class="slick-arrow__img" alt="slider right"/></a>',
    infinite: true
  };
  var howto_settings = {
    mobileFirst: true,
    arrows: false,
    dots: true,
    infinite: false
  };
  
  if($(window).width() < 768) {
    $feature.slick(feature_settings);
    $howto.slick(howto_settings);
  }
  
  $(window).on('resize', function() {
    if ($(window).width() > 768) {
      if ($feature.hasClass('slick-initialized')) {
        $feature.slick('unslick');
      }
      if ($howto.hasClass('slick-initialized')) {
        $howto.slick('unslick');
      }
      return;
    }

    if (!$feature.hasClass('slick-initialized')) {
      return $feature.slick(feature_settings);
    }
    if (!$howto.hasClass('slick-initialized')) {
      return $howto.slick(howto_settings);
    }
  });

  /* ===================
   * GTM Push
   * =================== */
  window.dataLayer = window.dataLayer || [];

  $('.btn-cta').on('click', function() {
    dataLayer.push({
      'event' : 'eventTokopoint', 
      'eventCategory' : 'tokopoints - microsite',
      'eventAction' : 'click cek sekarang',
      'eventLabel' : 'cek sekarang'
    });
  });

  $('.btn-signin').on('click', function() {
    dataLayer.push({
      'event' : 'eventTokopoint', 
      'eventCategory' : 'tokopoints - microsite',
      'eventAction' : 'click daftar sekarang',
      'eventLabel' : 'daftar sekarang'
    });
  });

  $('.btn-google-play').on('click', function() {
    dataLayer.push({
      'event' : 'eventTokopoint', 
      'eventCategory' : 'tokopoints - microsite',
      'eventAction' : 'click google play',
      'eventLabel' : 'google play'
    });
  });

  $('.btn-app-store').on('click', function() {
    dataLayer.push({
      'event' : 'eventTokopoint', 
      'eventCategory' : 'tokopoints - microsite',
      'eventAction' : 'click app store',
      'eventLabel' : 'app store'
    });
  });

  $('.btn-other-info').on('click', function() {
    dataLayer.push({
      'event' : 'eventTokopoint', 
      'eventCategory' : 'tokopoints - microsite',
      'eventAction' : 'click lihat info lainnya',
      'eventLabel' : 'info lainnya'
    });
  });
});

