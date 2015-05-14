  var giftcode= getQueryVariable("giftcode");
  var paymentid = getQueryVariable("paymentid");
var gotoVideoPlayer = function(){
  window.location.href="/videoplayer?giftcode=" + giftcode;
}


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}


$(document).ready(function(){
	$('p.giftcode').html(giftcode);
	$('p.paymentid').html(paymentid);
});