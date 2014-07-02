var offset;
$(document).ready(function() {

  $(window).bind('scroll', function(e) {
   
       $("#herop").text($(document).scrollTop());
			if (isvisible(".herobuffer")){
            
        $("#heroimg").css("position", "fixed");
        var offsetstring= "-" + offset+ "px";
         $("#heroimg").css("top", offsetstring);
      }
      else{
        $("#heroimg").css("top", "0px");
         $("#heroimg").css("position", "relative");
        offset=$(document).scrollTop();
        
      }
      
		});
});

function isvisible( elm ) {
  
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top;
    return (y <= (vpH + st));
}