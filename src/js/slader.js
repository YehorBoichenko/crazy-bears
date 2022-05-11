$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      },
    },
  ],
});
$('.slider-nav').slick({
  slidesToShow: 3,
  // slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        arrows: false,
      },
    },
  ],
});
