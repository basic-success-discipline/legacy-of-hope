
$(document).ready(function(){
	$('.banner').load(function() {
		var lim = $('.banner').position().top + $('.banner').height();

		if(lim >= window.innerHeight - 170){
			var dif = -1 * (lim - (window.innerHeight - 170)) -80;
			var dift = .2 * dif;
			console.log(dif);
			window.setTimeout(function(){
				if($(window).scrollTop() < 170){
					if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
						$('.buffer img').animate({
							"margin-top": dif,

						}, 1000, function() {});


						$('.wrapper-spotlight').animate({
							"margin-top": dift
						}, 1200, function() {
							$('.buffer img').attr("data-100", "margin-top: " + dif + "px;");
							$('.buffer img').attr("data-" + (lim-150).toString(), " margin-top: -80px; ");
							$('.wrapper-spotlight').attr("data-100", "margin-top: " + dift + "px");
							$('.wrapper-spotlight').attr("data-" + (lim-150).toString(), "margin-top: 0");

							skrollr.init({
								forceHeight: false
							});

						});


					}
				}
			}, 800);
		}

	});


	$('.prefooter')

});