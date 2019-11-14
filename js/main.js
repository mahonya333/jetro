$(function () {

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slider/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slider/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 820,
        settings: {
          arrows: false,
        }
      },
    ]

  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 658,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
    ]
  });
  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  });
  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();

  });
});




