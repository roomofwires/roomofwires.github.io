$(document).ready(function() {
  // Load background video
  $('video source').each(function() {
    var sourceFile = $(this).attr('data-src');
    $(this).attr('src', sourceFile);
    var video = this.parentElement;
    video.load();
    video.playbackRate = 0.75;
    video.play();
  });

  // Zoom jumbotron background image on mouseover
  $('.jumbotron').mouseenter(function(e) {
    $('.nav-logo').animate({'opacity': 0}, 250, function() {
      $('.nav-logo').animate({'opacity': 1.0}, 2000);
    });
  });
});
