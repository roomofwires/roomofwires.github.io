$(document).ready(function() {
  // Animate hovering over cards
  $('.card-img-top').mouseenter(function(e) {
    var shift = -1 * (($(this)[0].width * 1.05) - $(this)[0].width) / 2;

    $(this).animate({'width': '105%', 'height': 'auto', 'margin': '0px ' + shift + 'px'}, 250, function() {
      $(this).animate({'width': '100%', 'height': 'auto', 'margin': '0 0'}, 500);
    });
  });
});
