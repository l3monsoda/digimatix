window.onload = function () {

  $('.offers-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
  });

  $('.slider-prev').on('click', function () {
    $('.offers-slider').slick('slickPrev');
  });

  $('.slider-next').on('click', function () {
    $('.offers-slider').slick('slickNext');
  });

  var input = $('.form-input')

  input.on('focus', function () {
    $(this).prev().prev().fadeOut('fast')
    $(this).prev().fadeIn('fast')
  })

  input.on('blur', function () {
    if ($(this).val().length >= 1) {
      $(this).prev().prev().fadeOut('fast')
      $(this).prev().fadeIn('fast')
    }

    if (!$(this).val().length) {
      $(this).prev().fadeOut('fast')
      $(this).prev().prev().fadeIn('fast')
    }
  })

  $('.offers').on('click', function() {
    $('.offers').removeClass('offers-active')
    $(this).addClass('offers-active')
  })

}
