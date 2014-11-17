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
        dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
      }
      mediaanalytics: 
                    {
                        config: "http://ma1-r.analytics.edgesuite.net/config/beacon-3018.xml?setVideoObject=1",
                        plugin:
                        {
                            js: "http://79423.analytics.edgesuite.net/html5/akamaihtml5-min.js",
                            swf: "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf"
                        },
                        dimensions: 
                        {
                            eventName: "Legacy of Hope Concert",
                            title: "Legacy of Hope Concert"
                        }
                    }
    },
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