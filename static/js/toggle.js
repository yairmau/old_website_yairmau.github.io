/*
from:
http://stackoverflow.com/questions/37567657/multiple-show-hide-buttons-with-button-text-change-on-click
Removed a chunk of meaningless code 
since there's no way of using it 
because the plugin isn't 
provided (I'm assuming).
*/

$(function() {

  /*
  Combined both the `more/less` and 
  `slideToggle()` features under one 
  class(`.reveal`) and one click event.
  */
  $('.reveal').on('click', function(e) {
    /*
    Prevent anchor from default behavior 
    of jumping to a location.
    */
    e.preventDefault();
    /*
    See if `.reveal` has class `.more`
    */
    var more = $(this).hasClass('more');
    /*
    `.tgt` is the next `.slider` after 
    `this`(clicked `a.reveal`).
    */
    var tgt = $(this).parent().next('.slider');
    /*
    Toggle `.reveal`'s state between `.more` and 
    `.less` classes. (See CSS)
    */
    if (more) {
      $(this).removeClass('more').addClass('less');
    } else {
      $(this).removeClass('less').addClass('more');
    }
    /*
    `slideToggle()` only the `div.slider` that 
    follows `this` (clicked `a.reveal`)
    */
    tgt.slideToggle('slow');
  });

});