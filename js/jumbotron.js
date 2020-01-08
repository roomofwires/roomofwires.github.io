$(document).ready(function() {
  $('.jumbotron').css({'background-image': 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(img/jumbo.jpg)'});
  $('.jumbotron').mousemove(function(e) {
    var amountMovedX = (e.pageX * -1/60);
    var amountMovedY = (e.pageY * -1/60);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
});
