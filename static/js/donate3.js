var amount;
var email = "test@test.com";
var paymentmethod="paypal";


$('.step1 .button').click(function(){
  amount=$(this).attr('amount');
  initiatePayment();
});



function initiatePayment(){

// returns
// file.htm%3Farg1%3Dvalue1%20%40%23456%26arg2%3Dvalue2%20touch%C3%A9
// Note: "@" is replaced with "%40" and "é" is replaced with "%C3%A9"
  var baseurl = 'https://ipms-dev.appspot.com/ipms/donations/donate';
  var returnurl = $.url.encode('http://' + window.location.host + "/paymentconfirmed");

  alert(baseurl +'?zotz=161803&amount=' + amount + '&event=LOH-CONCERT&email=' + email + '&payby=' + paymentmethod + '&returnurl=' + returnurl);
}