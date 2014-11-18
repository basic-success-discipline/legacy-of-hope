 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");




 var amp,
 giftcode = "",
 media = [],
 isPlaying = true,
 angle = 0;




 function getMedia(ang, callback) {
   var url = 'https://ipms-dev.appspot.com/ipms/events/LOH-AUTH/streams/' + ang + "/hds?zotz=161803";
   if(giftcode && giftcode !="" && ang == 2){
    url= url+"&giftcode="+giftcode;
  }else if (ang==2){
    alert("need a giftcode!");
  }

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var data = JSON.parse(text);
    media=[
    {
      autoplay: true,
      title: "Demo Live Stream",
      poster: '/akamai/resources/images/bunny.jpg',
      temporalType: "live",
      controls: {
        mode: "none"
      },
      source: 
      [
      {src: data.URL, type: "video/mp4"}
      ],
      mediaanalytics:
      {
        dimensions: { title: "Legacy of Hope", eventName: "Legacy of Hope Concert" }
      }
    }
    ];

    callback(media);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}








function loadHandler(event)
{
    
  getMedia(1, function(media){
    var config = 
    {
      rules:
      {
        android_4_gets_m3u8:
        {
          regexp: "Android 4"
        }

      },
      eventmanagement: {enabled: false}
    };

    amp = new akamai.amp.AMP(document.getElementById("akamai-media-player"), config, readyHandler);
    
    amp.addEventListener("pause", togglePlayButton);
    amp.addEventListener("playing", togglePlayButton);

  });

}

function readyHandler(event)
{

// $('.akamai-video object').attr('wmode', 'transparent');
  amp.addEventListener("ended", endedHandler);
  loadVideo(0);
}

function clickVideo(index){
  if(angle!=index+1){
    loadVideo(index);
  }
}
function loadVideo(index)
{
  
  getMedia(index+1, function(media){
    amp.setMedia(media[0]);
    angle = index +1;
  });
}

function endedHandler(event)
{
  togglePlayButton(false);

  console.log("ended");
}




var csfs = new CsFullscreen({
  wrapper: '.video-area', //css selector
csWrapper: document.getElementById('crowdsurfing-wrapper'), //DOM node
playerWrapper: '.video-player',

});


function togglePlayButton(event){
  if(event.type=="playing"){
    $('.playbutton').removeClass('fa-play');
    $('.playbutton').addClass('fa-pause');
  }else{
    $('.playbutton').removeClass('fa-pause');
    $('.playbutton').addClass('fa-play');
  }

}

function playPause(){
 if(amp.getPaused()){
  amp.play();
  // togglePlayButton(true);
}else{
 amp.pause();
// togglePlayButton(false);
}
}

function setVolume(value){
  amp.setVolume(value/20);
}

function toggleCS(){

  if($('.full-screen #crowdsurfing-wrapper').hasClass('cs-hidden')){
    $('.full-screen #crowdsurfing-wrapper').removeClass('cs-hidden');
    $('.csBtn').html('Hide Crowdsurfing');
  }else{
    $('.full-screen #crowdsurfing-wrapper').addClass('cs-hidden');
    $('.csBtn').html('Show Crowdsurfing');
  }
  $("body").addClass("dummyClass").removeClass("dummyClass");
}


function gotoDonate(){
  window.location.href = "/donate";
}


$(document).ready(function() {

 if(!(giftcode && giftcode !="")){
  $('.backstageBtn').attr("onclick", "gcPrompt()");

}else{
  $('.backstageBtn').attr("onclick", "clickVideo(1)");
}

});


function gcPrompt(){
  $('.gc-prompt').show();
}
function closeGCPrompt(){
  $('.gc-prompt').hide();
}

function inputGC(){
  giftcode = $('.gc-text').val();
  if(!(giftcode && giftcode !="")){
    alert("invalid giftcode");

  }else{
    $('.backstageBtn').attr("onclick", "clickVideo(1)");
    $('.backstageBtn').html("Backstage Unlocked");
    $('.gc-enter').hide();
    clickVideo(1);
    closeGCPrompt();
  }
}

$('.fs-title').hover(
  function(e) {
   $('.video-bar').addClass("show-bars");
  },
  function(e) {
    $('.video-bar').removeClass("show-bars");
    // $("#crowdsurfing-wrapper").style("height", "100%", "important");

  }
);

$('.fs-menu').hover(
  function(e) {
   $('.video-bar').addClass("show-bars");
  },
  function(e) {
    $('.video-bar').removeClass("show-bars");
    // $("#crowdsurfing-wrapper").style("height", "100%", "important");

  }
);


$(".full-screen #crowdsurfing-wrapper").hover( 
  function(e) {
    console.log(e.pageY);
   
  },
  function(e) {
    // $(".full-screen #crowdsurfing-wrapper").style("height", "100%", "important");

  });



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



(function($) {    
  if ($.fn.style) {
    return;
  }

  // Escape regex chars with \
  var escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
      return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
      this.setAttribute(styleName, value);
      var priority = typeof priority != 'undefined' ? priority : '';
      if (priority != '') {
        // Add priority manually
        var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
            '(\\s*;)?', 'gmi');
        this.cssText =
            this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
      }
    };
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
      return this.removeAttribute(a);
    };
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
      var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
          'gmi');
      return rule.test(this.cssText) ? 'important' : '';
    }
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node
    if (typeof node == 'undefined') {
      return this;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
      if (typeof value != 'undefined') {
        // Set style property
        priority = typeof priority != 'undefined' ? priority : '';
        style.setProperty(styleName, value, priority);
        return this;
      } else {
        // Get style property
        return style.getPropertyValue(styleName);
      }
    } else {
      // Get CSSStyleDeclaration
      return style;
    }
  };
})(jQuery);


