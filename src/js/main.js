window.onload = function () {


  $('.offers-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
  });

  $('.slider-prev').on('click', function() {
    $('.offers-slider').slick('slickPrev');
  });

  $('.slider-next').on('click', function() {
    $('.offers-slider').slick('slickNext');
  });

}
