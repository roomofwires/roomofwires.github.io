$(document).ready(function() {
  // Randomise jumbotron background image
  var images = ['jumbo01.jpg', 'jumbo02.jpg', 'jumbo03.jpg', 'jumbo04.jpg', 'jumbo05.jpg', 'jumbo06.jpg'];
  $('.jumbotron').css({'background-image': 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(img/'
    + images[Math.floor(Math.random() * images.length)] + ')'});

  // Zoom jumbotron background image on mouseover
  $('.jumbotron').mouseenter(function(e) {
    $('.nav-logo').animate({'opacity': 0}, 250, function() {
      $('.nav-logo').animate({'opacity': 1.0}, 2000);
    });
  });
});
