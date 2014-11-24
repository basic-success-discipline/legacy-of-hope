


  $('.donatepage .buttons .button').click(function(){
    $('.step2 h3.donatevia').html("Donate $" + $(this).attr('amount') + " via");
  	$('.step2').css('height', '200px');
  });