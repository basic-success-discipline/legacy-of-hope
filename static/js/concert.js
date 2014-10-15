
   $(document).ready(function(){
   	$('.stage').load(function() {
   	var lim = $('.stage').position().top + $('.stage').height();


	// $('.navbar').attr("data-" + (lim - 150).toString(), "background-color:rgb(28, 31, 38);");
	// $('.navbar').attr("data-" + (lim + 80).toString(), "background-color:rgb(21, 21, 21);");


	// $('.hero img').attr("data-0"  + (lim - 300).toString(), "opacity:1.0;");
	// $('.hero img').attr("data-" + lim, "opacity:0;");


	// $('.sl .herobuffer').attr("data-0", "height:130px;margin-top: -130px;");
	// $('.sl .herobuffer').attr("data-" + (lim -70).toString(), "height:200px;margin-top: -200px;");

	// $('.sl .herobuffer').attr("data-" + lim.toString(), "opacity:0.99999;");
	// $('.sl .herobuffer').attr("data-" + (lim + 100).toString(), "opacity:0;");

	$('.stage').attr("data-0", "margin-bottom:-15%;");
	$('.stage').attr("data-" + (lim-150).toString(), "margin-bottom:0");

	// $('.headscroller').attr("data-0", "margin-top:-160px");
	// $('.headscroller').attr("data-" + (lim-150).toString(), "margin-top: 0px;margin-bottom: 0px;");
    var s = skrollr.init({
    	forceHeight: false
    });
    });

});