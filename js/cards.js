$(document).ready(function() {
  // Animate hovering over cards
  $('.col-lg-3 .card-img-top').mouseenter(function(e) {
    $(this).animate({'opacity': 0.5}, 250, function() {
      $(this).animate({'opacity': 1.0}, 500);
    });
  });
});
