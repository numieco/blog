jquery(function ($) {

  $('#frame').sly({
    slidee: $('.slidee'),
    horizontal: 1,
    itemNav: 'centered',

    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,

    elasticBounds: 1,
    speed: 300,
    startAt: 2,
  });

});
