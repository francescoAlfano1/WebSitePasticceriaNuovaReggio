
$(document).ready(function(){

$('.choice').on('click', function () {
  var $this = $(this);
  
  $('.reaction').removeClass('reaction-fade-in');
  $('.emoji').removeClass('emoji-selected');
  $this.find('.reaction').addClass('reaction-fade-in');
  $this.find('.emoji').addClass('emoji-selected');
    
});

  

});