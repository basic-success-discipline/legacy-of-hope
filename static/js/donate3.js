var amount, paymentmethod, email;


$('.step1 .button.enabled').click(function(){
  $('.step1 .button.enabled').removeClass("selected");
  $(this).addClass("selected");

  if($(this).hasClass("other")){
    $('.otheramount').removeAttr("disabled");
    if($('.otheramount').val() && $('.otheramount').val()!=""){
      $('.step2 .heading').removeClass("disabled");
      $('.step2 .button').addClass("enabled");
    }else{
     $('.step2 .heading').addClass("disabled");
     $('.step2 .button').removeClass("enabled");
   }
 }else{

  amount=$(this).attr('amount');

  $('.step2 .heading').removeClass("disabled");
  $('.step2 .button').addClass("enabled");
     // $('.otheramount').val("");
     $('.otheramount').attr("disabled", "disabled");
   }

 });


function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {

    return false;
  }
  if(charCode==48){
    if(!($('.otheramount').val() && $('.otheramount').val() !="")){
      return false;
    }
  }
  return true;
}



function updateAmount(){
  if($('.otheramount').val() && $('.otheramount').val() !=""){
    amount = $('.otheramount').val() + ".00";
    $('.step2 .heading').removeClass("disabled");
    $('.step2 .button').addClass("enabled");
  }
  else{
    $('.step2 .heading').addClass("disabled");
    $('.step2 .button').removeClass("enabled");
  }
}


$('.step2 .button').click(function(){
  if($(this).hasClass("enabled")){
    $('.step2 .button.enabled').removeClass("selected");
    $(this).addClass("selected");
    paymentmethod = $(this).attr("method");
    $('.step3 .heading').removeClass("disabled");
    $('.emailaddress').removeAttr("disabled");
  }
});


function updateEmailAddress(){
  if ($('.emailaddress').val().match(/.+@.+\..+/i)){
    email = $('.emailaddress').val();
    $('.submit.button').addClass("enabled");
  }else{
    $('.submit.button').removeClass("enabled");
  }
}

$('.submit.button').click(function(){
  if($(this).hasClass("enabled")){
    initiatePayment();
  }
});



function initiatePayment(){

// returns
// file.htm%3Farg1%3Dvalue1%20%40%23456%26arg2%3Dvalue2%20touch%C3%A9
// Note: "@" is replaced with "%40" and "é" is replaced with "%C3%A9"
var baseurl = 'https://ipms-dev.appspot.com/ipms/donations/donate';
var returnurl = $.url.encode('http://' + window.location.host + "/paymentconfirmed");

var url = baseurl +'?zotz=161803&amount=' + amount + '&event=LOH-AUTH&email=' + email + '&payby=' + paymentmethod + '&returnurl=' + returnurl;


 var xhr = createCORSRequest('GET', url);
 if (!xhr) {
  alert('This site uses Cross-Origin Resource Sharing (CORS). Please use a browser that supports CORS.');
  return;
}

  // Response handlers.
  xhr.onload = function() {
    // if(xhr.status==400){
    //   $('.payment-error').html("I'm sorry there is an error with the information you provided.");
    //   $('.payment-error').show();
    //   $('.payment-message').css('visibility', 'hidden');
    // }else if(xhr.status==500){
    //    $('.payment-error').html("I'm sorry there was an error processing your donation.");
    //   $('.payment-error').show();
    //   $('.payment-message').css('visibility', 'hidden');
    // }else if(xhr.status==201){
    // var text = xhr.responseText;
    // var data = JSON.parse(text);
    // giftcode=data.GiftCode;
    // callback();
    // }
    

  };

  xhr.onerror = function() {
      // $('.payment-error').html("I'm sorry there was an error processing your donation.");
      // $('.payment-error').show();
      // $('.payment-message').css('visibility', 'hidden');
  };

  xhr.send();
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










