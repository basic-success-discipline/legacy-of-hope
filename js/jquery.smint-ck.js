/*

SMINT V1.0 by Robert McCracken
SMINT V2.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy ‏(@mcpacosy)

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/(function(){$.fn.smint=function(e){$(this).addClass("smint");var t=$.extend({"scrollSpeed ":500},e),n=new Array,r=0,i=$(".smint").height();return $(".smint a").each(function(e){console.log("index: "+e);if(t.scrollSpeed)var s=t.scrollSpeed;var o=$(this).attr("id");n.push(Array($("div."+o).position().top-i,$("div."+o).height()+$("div."+o).position().top,o));var u=$(".smint").offset().top,a=function(t){var r=$(window).scrollTop();r>u?$(".smint").css({position:"fixed",top:0}).addClass("fxd"):$(".smint").css({position:"absolute",top:u}).removeClass("fxd");if(n[e][0]<=r&&r<=n[e][1]){if(t=="up"){$("#"+o).addClass("active");$("#"+n[e+1][2]).removeClass("active")}else if(e>0){$("#"+o).addClass("active");$("#"+n[e-1][2]).removeClass("active")}else t==undefined&&$("#"+o).addClass("active");$.each(n,function(e){if(o!=n[e][2]){console.log(e);$("#"+n[e][2]).removeClass("active")}})}};a();$(window).scroll(function(){var e=$(this).scrollTop();e>r?direction="down":e<r&&(direction="up");r=e;a(direction);if($(window).scrollTop()+$(window).height()==$(document).height()){$(".smint a").removeClass("active");$(".smint a").last().addClass("active")}});$(this).on("click",function(e){var t=$(".smint").height();e.preventDefault();var n=$(this).attr("id");if($(this).hasClass("smint-disable"))return!1;var r=$("div."+n).offset().top-t;$("html, body").animate({scrollTop:r},s)})})}})();