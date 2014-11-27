 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");




 var amp, csfs,
 giftcode = "",
 media = [],
 isPlaying = true,
 angle = 0,
 volume = 10,
 vfactor = 20,
 defaultv = 3;






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
      // poster: '/akamai/resources/eventmanagement/waiting_slate.png',
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


    setStreamButton(ang);
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
if(angle==0){
  loadVideo(0);
}else{
  loadVideo(angle-1);
}
volume = amp.getVolume()*vfactor;
if(volume ==0){
  mute();
}else{
  unmute();
}
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




csfs = new CsFullscreen({
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

  //  if(event.type=="playing"){
  //   $('.playbutton').removeClass('play');
  //   $('.playbutton').addClass('pause');
  // }else{
  //   $('.playbutton').removeClass('pause');
  //   $('.playbutton').addClass('play');
  // }

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

 volume = value;
 if(volume ==0){
  $('.volumebutton').removeClass('fa-volume-up');
  $('.volumebutton').addClass('fa-volume-off');
  amp.mute();
}else{
  unmute();
}
amp.setVolume(value/vfactor);

}

function mute(){
// Mute the video
    amp.mute();
    $('.volumebutton').removeClass('fa-volume-up');
    $('.volumebutton').addClass('fa-volume-off');
    $('.range input').attr('value','0');
}

function unmute(){
  amp.unmute();
  $('.volumebutton').addClass('fa-volume-up');
  $('.volumebutton').removeClass('fa-volume-off');
  if(volume==0){
    volume = defaultv *vfactor;
    setVolume(volume);
  }
  $('.range input').attr('value',volume);
}

// Event listener for the mute button
$('.volumebutton').click(function(){
  if (amp.getVolume()>0) {
    mute()
  } else {
    // Unmute the video
    unmute();
  }
});

$('.fstogglebutton').click(function(){
  csfs.toggle($('.fstogglebutton').hasClass('fa-arrows-alt'));
});


function updateFSButton(){
  if($('body').hasClass('full-screen')){
    $('.fstogglebutton').removeClass('fa-arrows-alt');
    $('.fstogglebutton').addClass('fa-compress');
  }else{
    $('.fstogglebutton').addClass('fa-arrows-alt');
    $('.fstogglebutton').removeClass('fa-compress');
  }
}


function updateFSButton(fs){
  if(fs){
    $('.fstogglebutton').removeClass('fa-arrows-alt');
    $('.fstogglebutton').addClass('fa-compress');
  }else{
    $('.fstogglebutton').addClass('fa-arrows-alt');
    $('.fstogglebutton').removeClass('fa-compress');
  }
}
function gotoDonate(){
  window.open("/donate");
}


$(document).ready(function() {

 if(!(giftcode && giftcode !="")){
  $('.backstageBtn').attr("onclick", "gcPrompt()");

}else{
  $('.backstageBtn').attr("onclick", "clickVideo(1)");
}

if (window.navigator.userAgent.indexOf("MSIE") > 0 || window.navigator.userAgent.indexOf("Trident/") > 0){
  $("#crowdsurfing-wrapper").addClass("ie");
  $(".volume .range input").addClass("ie");
}

$('.gc-text').watermark("paste premium code here");

 document.querySelector('body').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);


setStreamButton(angle);


});

function updateGCPrompt(fs){
  if(fs){
    if($('.gc-prompt-wrapper').is(':visible')){
      $('.gc-prompt-wrapper').css('display', 'none');
      $('.fs-gc-prompt').css('display', 'table');
    }
  }
  else{
    if($('.fs-gc-prompt').is(':visible')){
      $('.gc-prompt-wrapper').css('display', 'table');
      $('.fs-gc-prompt').css('display', 'none');
    }
  }
}
function gcPrompt(){
  if($("body").hasClass("full-screen")){
    $('.fs-gc-prompt').css("display", "table");
  }else{

  $('.gc-prompt-wrapper:not(.fs-gc-prompt)').css("display", "table");
  }
}
function closeGCPrompt(){
 if($("body").hasClass("full-screen")){
    $('.fs-gc-prompt').css("display", "none");
  }else{

  $('.gc-prompt-wrapper:not(.fs-gc-prompt)').css("display", "none");
  }
}

function inputGC(){
  giftcode = $('.gc-text').val();
  if(!(giftcode && giftcode !="") || giftcode=="test"){
    $('.gc-prompt p.error').show();
  }else{
    $('.premium-stream-locked').css("display", "none");
    $('.backstageBtn').attr("onclick", "clickVideo(1)");
    // $('.backstageBtn').html("Backstage Unlocked");
    $('.backstageBtn .lock').css("display", "none");
    $('.backstageBtn').css('padding-left', '10px');
    $('.gc-enter-wrapper').css('display', 'none');
    $('.backstageBtn.withpngs').addClass('unlocked');
    clickVideo(1);
    closeGCPrompt();
  }
}


function inputFSGC(){
  giftcode = $('.fs-gc-text').val();
  if(!(giftcode && giftcode !="") || giftcode=="test"){
    $('.gc-prompt p.error').show();
  }else{
    $('.premium-stream-locked').css("display", "none");
    $('.backstageBtn').attr("onclick", "clickVideo(1)");
    // $('.backstageBtn').html("Backstage Unlocked");
    $('.backstageBtn .lock').css("display", "none");
    $('.backstageBtn').css('padding-left', '10px');
    $('.gc-enter-wrapper').css('display', 'none');
    $('.backstageBtn.withpngs').addClass('unlocked');
    clickVideo(1);
    closeGCPrompt();
  }
}

// $('.fs-bar-wrapper').hover(
//   function(e) {
//    $('.video-bar').addClass("show-bars");
//    $('#crowdsurfing-wrapper').addClass("make-cs-opaque");
//   $('.video-area.cs-fullscreen-minimized #crowdsurfing-wrapper').addClass("make-minimized-cs-appear");
//  },
//  function(e) {
//   $('.video-bar').removeClass("show-bars");
//   $('.full-screen #crowdsurfing-wrapper').removeClass("make-cs-opaque");
//   $('.video-area.cs-fullscreen-minimized #crowdsurfing-wrapper').removeClass("make-minimized-cs-appear");

//   }
//   );

var timeout = null;

$(".fs-bar-wrapper").on('mousemove', function() {
  // if($(this).hasClass("full-screen")){
     $('.video-bar').addClass("show-bars");
     $('.video-bar').removeClass("nocursor");
   $('#crowdsurfing-wrapper').addClass("make-cs-opaque");
  $('.video-area.cs-fullscreen-minimized #crowdsurfing-wrapper').addClass("make-minimized-cs-appear");
    if (timeout !== null) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
        timeout = null;
          $('.video-bar').removeClass("show-bars");
          $('.video-bar').addClass("nocursor");
  $('.full-screen #crowdsurfing-wrapper').removeClass("make-cs-opaque");
  $('.video-area.cs-fullscreen-minimized #crowdsurfing-wrapper').removeClass("make-minimized-cs-appear");


        console.log("mouse idle for 3 scond");
    }, 3000);
  // }
});

$("body").mousemove(
  function(e) {
   // $(this).removeClass("nocursor");
   // $(this).addClass("nocursor");
 });



function updateVideoBars(csminimized){
  if(csminimized){
    $('.fs-menu').css('width', "100%");
    // $('.cs-minimized-hoverfix').show();
  }else{
    $('.fs-menu').css('width', "calc(100% - 300px)");
    // $('.cs-minimized-hoverfix').hide();
  }
}


function setStreamButton(ang){
  if(ang==1){
    $('.left-menu').addClass("main-stream");
    $('.right-menu').removeClass("premium-stream");
  }else if(ang ==2){
    $('.left-menu').removeClass("main-stream");
    $('.right-menu').addClass("premium-stream");
  }
}





document.addEventListener(
    'CrowdSurfingControlEvent',
    function checkIfIsInFullScreen(param) {
        if (param.data[0] === 'fullScreen' && param.data[1] === true) {
            
            updateFSButton(true);
            updateGCPrompt(true);
        } else if (param.data[0] === 'fullScreen' && param.data[1] === false) {
           
            updateFSButton(false);
            updateGCPrompt(false);
        } else if (param.data[0] === '"navMenuMessage"' && param.data[1] === "minimizeCSWidget") {
          alert("minimized");
          $(".fs-menu").removeClass("cs-expanded");
          // CrowdSurfing has been minimized
        } else if (param.data[0] === '"navMenuMessage"' && param.data[1] === "maximizeCSWidget") {
          $(".fs-menu").addClass("cs-expanded");
          // CrowdSurfing has been maximized
        } else if(param.data[0] === 'fullScreen' && $("body").hasClass("full-screen")){

            updateFSButton(false);
            updateGCPrompt(false);
        }else if(param.data[0] === 'fullScreen' && !$("body").hasClass("full-screen")){
            updateFSButton(true);
            updateGCPrompt(true);
        }
    },
    false
);



$(".gc-text").mouseup(function(e){
  e.preventDefault();
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





// Detecting attribute changes -- WHERE HAS THIS BEEN ALL OF MY LIFE!??!?!

$(function() {
(function($) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    $.fn.attrchange = function(callback) {
        if (MutationObserver) {
            var options = {
                subtree: false,
                attributes: true
            };

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(e) {
                    callback.call(e.target, e.attributeName);
                });
            });

            return this.each(function() {
                observer.observe(this, options);
            });

        }
    }
})(jQuery);

//Now you need to append event listener
$('.video-area').attrchange(function(attrName) {

    if(attrName=='class'){
            updateVideoBars($('.video-area').hasClass('cs-fullscreen-minimized'));
    }

});
});



