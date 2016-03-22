// add UI elements
$('div.overlay-content').prepend('<div id="dd-mask"></div>');
$('div.the-shot div.single-img').append('<span id="dd-toggle"></span>');

// observe toggle mouseovers
$('#dd-toggle').hover(
  function(e) {
    $('#dd-mask').fadeIn('fast');
    $('.shot-overlay').css("background-color", "rgba(0,0,0,0.93)");
  },
  function(e) {
    $('#dd-mask').fadeOut('fast');
    $('.shot-overlay').css("background-color", "rgba(30,30,30,0.9)");
  }
);