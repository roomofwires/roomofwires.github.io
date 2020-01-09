$(document).ready(function() {
  // Animate hovering over cards
  $('.col-lg-3 .card-img-top').mouseenter(function(e) {
    $(this).animate({'width': '105%', 'height': 'auto'}, 250, function() {
    $(this).animate({'width': '100%', 'height': 'auto'}, 500);
    });
  });
});
