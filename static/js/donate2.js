

$('.donatepage .step1 .buttons .button').click(function(){
  $('.step2 h3.donatevia').html("Donate $" + $(this).attr('amount') + " via");
   $('input[name="ccamount"]').val($(this).attr('amount'));
  $('.step2').css('height', '200px');
});


var ccamount = $('input[name="ccamount"]');
var ccnumber = $('input[name="ccnumber"]');
var ccfname = $('input[name="ccfirst-name"]');
var cclname = $('input[name="cclast-name"]');
var ccexpiry = $('input[name="ccexpiry"]');
var cccvc = $('input[name="cccvc"]');

var vamount = $('.vamount');
var vnumber = $('.vnumber');
var vfname = $('.vfname');
var vlname = $('.vlname');
var vexpiry = $('.vexpiry');
var vcvc = $('.vcvc');


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

$('.validate').hide();
var valid = validateCC();

  if(valid){
    alert("all good brother!");
  }
 return false;
}





var validateCC =  function(){
  var valid = true;


  alert(ccamount.val());
   if( !ccamount.val() || ccamount.val() == "" || !(isNumeric(ccamount.val()))){
    valid=false;
      vamount.html("You must enter how much you would like to donate");
      vamount.show();
  }



  
  var validnum = $.payment.validateCardNumber(ccnumber.val());
  if (!validnum) {
    valid=false;
    vnumber.html("You must enter a valid credit card number.");
    vnumber.show();
  }


  if( !ccfname.val() || ccfname.val() == ""){
    valid=false;
      vfname.html("You must enter your first name.");
      vfname.show();
  }

   if( !cclname.val() || cclname.val() == ""){
    valid=false;
      vlname.html("You must enter your last name.");
      vlname.show();
  }

  if (ccexpiry.val().split("/").length == 2){
    var validexpiry = $.payment.validateCardExpiry(ccexpiry.val().split("/")[0].trim(),ccexpiry.val().split("/")[1].trim() );
    if (!validexpiry) {
      valid=false;
      vexpiry.html("You must enter a valid expiration year.");
      vexpiry.show();
    }
  }else{
      valid=false;
      vexpiry.html("You must enter a valid expiration year.");
      vexpiry.show();
  }

  var validcvc = $.payment.validateCardCVC(cccvc.val());
  if (!validcvc) {
    valid=false;
    vcvc.html("You must enter a valid CVC code.");
    vcvc.show();
  }

  return valid;

}




