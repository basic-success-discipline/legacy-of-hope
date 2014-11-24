

$('.donatepage .step1 .buttons .button').click(function(){
  $('.step2 h3.donatevia').html("Donate $" + $(this).attr('amount') + " via");
   $('input[name="ccamount"]').val($(this).attr('amount'));
  $('.step2').css('height', '200px');
});


var ccnumber = $('input[name="ccnumber"]');
var ccfname = $('input[name="ccfirst-name"]');
var cclname = $('input[name="cclast-name"]');
var ccexpiry = $('input[name="ccexpiry"]');
var cccvc = $('input[name="cccvc"]');

$('.active form').card({
  container: '.card-wrapper',
  nameInput: 'input[name="ccfirst-name"], input[name="cclast-name"]',
  numberInput: ccnumber, 
  expiryInput: ccexpiry, 
  cvcInput: cccvc
});



ccnumber.payment('formatCardNumber');
ccexpiry.payment('formatCardExpiry');
cccvc.payment('formatCardCVC');



var submitCC =  function(){



  var validnum = $.payment.validateCardNumber(ccnumber.val());
  if (!validnum) {
    alert('Your card number is not valid!');
  }else{
    alert($.payment.cardType(ccnumber.val()));
    // alert('Your card number is totally valid homie!');
  }

   var validexpiry = $.payment.validateCardExpiry(ccexpiry.val().split("/")[0].trim(),ccexpiry.val().split("/")[1].trim() );
  if (!validexpiry) {
    alert('Your card expiry is not valid!');
  }else{
    alert('Your card expiry is totally valid homie!');
  }

   var validcvc = $.payment.validateCardCVC(cccvc.val());
  if (!validcvc) {
    alert('Your card cvc is not valid!');
  }else{
    alert('Your card cvc  is totally valid homie!');
  }

    return false;
}
