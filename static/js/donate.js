$('.menu-donate').click(function(){
    showDonate();
   });
$('.closedonate').click(function(){
    $('.lb').hide(500, "swing");
   });

var showDonate = function(){
  $('.lb').show(500, "swing");
}

  $('.black-overlay').click(function(){
    $('.lb').hide(500, "swing");
   });



  $('.donatepage .buttons .button').click(function(){
  	alert("congratulations, you're a donor!");
  });