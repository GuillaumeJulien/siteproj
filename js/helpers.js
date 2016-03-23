$(document).ready(function() {
  $('.smooth-scroll').on('click', function() {
    var target = $(this).attr('href');
    var speed = 750;
    $('html, body').animate( { scrollTop: $(target).offset().top }, speed );
    return false;
  });
});