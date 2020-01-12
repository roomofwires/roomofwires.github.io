$(document).ready(function() {
  // Animate hovering over cards
  $('.col-lg-3 .card-img-top').mouseenter(function(e) {
    $(this).animate({'opacity': 0.5}, 250);
  });
  $('.col-lg-3 .card-img-top').mouseleave(function(e) {
    $(this).animate({'opacity': 1.0}, 250);
  });
});
