$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
    // ajax call get data from server and append to the div
    $('.archive').load('../archive.html');
  }
});
