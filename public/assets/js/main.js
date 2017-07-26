$(document).ready(function(){
  $('#category-bar').slick({
    speed: 300,
    slidesToShow: 4,
    swipeToSlide: true,
    mobileFirst: true,
    arrows: false,
    accessibility: false,
    centerMode: true,
    centerPadding: '15%',
    infinite: false,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});