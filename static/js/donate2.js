

$('.donatepage .step1 .buttons .button').click(function(){
  $('.step2 h3.donatevia').html("Donate $" + $(this).attr('amount') + " via");
   $('input[name="ccamount"]').val($(this).attr('amount'));
  $('.step2').show();
  $('.step2').addClass("fadeInDown");

});


$('.donatepage .step2 .button.ccoption').click(function(){
  $('.step3').show();
  $('.step3').addClass("fadeInDown");
});




var ccamount = $('input[name="ccamount"]');
var ccnumber = $('input[name="ccnumber"]');
var ccfname = $('input[name="ccfirst-name"]');
var cclname = $('input[name="cclast-name"]');
var ccexpiry = $('input[name="ccexpiry"]');
var cccvc = $('input[name="cccvc"]');
var ccemail = $('input[name="ccemail"]');


var vamount = $('.vamount p');
var vnumber = $('.vnumber p');
var vfname = $('.vfname p');
var vlname = $('.vlname p');
var vexpiry = $('.vexpiry p');
var vcvc = $('.vcvc p');
var vemail = $('.vemail p');

var valid = true;

var CreditCardDonation;
var CreditCard;
var acceptedCCTypes= new Array("visa", "mastercard", "discover", "amex");




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

var confirmCC = function(confirm){
  if(confirm){
    alert("you got it! submitting the payment!");
  }else{
  $('.step4').removeClass("fadeInDown");
  $('.step4').addClass("fadeOutUp");
  $(".active form input").removeAttr('disabled');
  }
}

var submitCC =  function(){

var valid = validateCC();

  if(valid){
    CreditCardDonation = {
      "Amount": ccamount.val(),
      "Email": ccemail.val(),
      "CreditCard": {
        "Number": ccnumber.val().replace(/\s/g,""),
        "CCType": $.payment.cardType(ccnumber.val()),
        "ExpireMonth": $.payment.cardExpiryVal(ccexpiry.val()).month,
        "ExpireYear": $.payment.cardExpiryVal(ccexpiry.val()).year,
        "CVV": cccvc.val(),
        "FirstName": ccfname.val(),
        "LastName": cclname.val()
      }
    };

    console.log(CreditCardDonation);

    $(".active form input").attr('disabled','disabled');
    $('.step4 .cfamount p span').html(CreditCardDonation.Amount);
    $('.step4 .cfnumber p span').html(CreditCardDonation.CreditCard.Number);
    $('.step4 .cftype p span').html(CreditCardDonation.CreditCard.CCType);
    $('.step4 .cffname p span').html(CreditCardDonation.CreditCard.FirstName);
    $('.step4 .cflname p span').html(CreditCardDonation.CreditCard.LastName);
    $('.step4 .cfexpiry p span').html(CreditCardDonation.CreditCard.ExpireMonth + " / " + CreditCardDonation.CreditCard.ExpireYear);
    $('.step4 .cfcvc p span').html(CreditCardDonation.CreditCard.CVV);
     $('.step4 .cfemail p span').html(CreditCardDonation.Email);
     $('.step4').show();
     $('.step4').removeClass("fadeOutUp");
  $('.step4').addClass("fadeInDown");
  }
 return false;
}





var validateCC =  function(){
  
$('.validate-container').hide();
$('.validate p').html("");

  valid=true;

   if( !ccamount.val() || ccamount.val() == ""){
    valid=false;
      vamount.html("You must enter how much you would like to donate");
  }



  var validnum = $.payment.validateCardNumber(ccnumber.val());
  if (!validnum) {
    valid=false;
    vnumber.html("You must enter a valid credit card number.");
  }else {
    var a = $.payment.cardType(ccnumber.val());
    var b= acceptedCCTypes;
    if(!(a == b[0] || a == b[1] || a == b[2] || a == b[3])){
    valid=false;
    vnumber.html("Credit card must be Visa, Mastercard, Discover, or American Express.");
  }
}

  if( !ccfname.val() || ccfname.val() == ""){
    valid=false;
      vfname.html("You must enter your first name.");
  }

   if( !cclname.val() || cclname.val() == ""){
    valid=false;
      vlname.html("You must enter your last name.");
  }
  if (ccexpiry.val().split("/").length == 2){
    var validexpiry = $.payment.validateCardExpiry(ccexpiry.val().split("/")[0].trim(),ccexpiry.val().split("/")[1].trim() );
    if (!validexpiry) {
      valid=false;
      vexpiry.html("You must enter a valid expiration date.");
    }
  }else{
      valid=false;
      vexpiry.html("You must enter a valid expiration date.");
  }

  var validcvc = $.payment.validateCardCVC(cccvc.val());
  if (!validcvc) {
    valid=false;
    vcvc.html("You must enter a valid CVC code.");
  }



   var validemail = ccemail.val().match(/.+@.+\..+/i);
  if (!validemail) {
    valid=false;
    vemail.html("You must enter a valid email address");
  }

  if(!valid){
    $('.validate-container').css('display', 'inline');
     $('.form-container').removeClass('six');
     // $('.card-container').removeClass('six');
       $('.form-container').addClass('three');
     // $('.card-container').addClass('four');

  }
  return valid;

}




