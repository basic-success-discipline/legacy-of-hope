

$('.donatepage .step1 .buttons .button').click(function(){
   $('input[name="ccamount"]').val($(this).attr('amount').replace("$",""));
  $('.part').addClass("collapse");
  $('.part2').removeClass("collapse");
  $('.part2').show();
  $('.part2').addClass("fadeInDown");


});


$('.donatepage .step2 .button.ccoption').click(function(){
  $('.part').addClass("collapse");
  $('.part3').removeClass("collapse");
  $('.part3').show();
  $('.part3').addClass("fadeInDown");
});

$('.part .heading').click(function(){
  if($(this).parent().hasClass("collapse")){
    $('.part').addClass("collapse");
    $(this).parent().removeClass("collapse");
  }
})

$('.submit.button.enabled').click(function(){

  submitCC();

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
    // sendCC(function(){
    alert("you did it!");
    // });
  }else{
  $('.part4').removeClass("fadeInDown");
  $('.part4').addClass("fadeOutUp");
  $('.part4').hide();
  // $('.part').addClass("collapse");
  $('.part3').removeClass("collapse");
  $(".active form input").removeAttr('disabled');
  $('.submit.button').addClass("enabled");
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

    var cccensored = "************" + CreditCardDonation.CreditCard.Number.substr(CreditCardDonation.CreditCard.Number.length - 4);
    $(".active form input").attr('disabled','disabled');
    $('.submit.button').removeClass("enabled");
    $('.step4 .cfamount p span').html("$" + CreditCardDonation.Amount + " (USD)");
    $('.step4 .cfnumber p span').html(cccensored);
    $('.step4 .cftype p span').html(CreditCardDonation.CreditCard.CCType);
    $('.step4 .cffname p span').html(CreditCardDonation.CreditCard.FirstName);
    $('.step4 .cflname p span').html(CreditCardDonation.CreditCard.LastName);
    $('.step4 .cfexpiry p span').html(CreditCardDonation.CreditCard.ExpireMonth + " / " + CreditCardDonation.CreditCard.ExpireYear);
    $('.step4 .cfcvc p span').html(CreditCardDonation.CreditCard.CVV);
     $('.step4 .cfemail p span').html(CreditCardDonation.Email);

      $('.part').addClass("collapse");
      $('.part4').removeClass("collapse");
     $('.part4').show();
     $('.part4').removeClass("fadeOutUp");
  $('.part4').addClass("fadeInDown");

  }
 return false;
}





var validateCC =  function(){
  
$('.validate-container').hide();
$('.validatemessage').hide();
$('.validate p').html("");

  valid=true;

  var money = /^\d+(?:\.\d{0,2})$/;
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
     $('.validate p').css('display', 'block');
     $('.form-container').removeClass('six');
     // $('.card-container').removeClass('six');
       $('.form-container').addClass('three');
     // $('.card-container').addClass('four');
  } else{
    $('.validate-container').css('display', 'none');
    $('.validate p').css('display', 'none');
    $('.form-container').removeClass('three');
    $('.form-container').addClass('six');
  }
  return valid;

}



// CORS STUFF


function sendCC(callback) {
   var url = 'https://ipms-dev.appspot.com/ipms/events/LOH-AUTH/streams/' + ang + "/hds?zotz=161803";


  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var data = JSON.parse(text);
    alert(data.GiftCode);
    callback();
  };

  xhr.onerror = function() {
    alert('Whoops, there was an error making the request.');
  };

  xhr.send(JSON.stringify(CreditCardDonation));
}


// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}





