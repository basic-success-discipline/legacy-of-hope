 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");




var amp,
giftcode = "",
premium = true,
media = [];




 function getMedia(angle, callback) {
   var url = 'https://ipms-dev.appspot.com/ipms/events/LOH20141203/streams/' + angle + "/hds?zotz=161803";
   if(giftcode && giftcode !="" && angle == 2){
    url= url+"&giftcode="+giftcode;
  }else if (angle==2){
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
    console.log(data.URL);
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
    
    amp.addEventListener("pause", togglePlayButton(false));
    amp.addEventListener("play", togglePlayButton(true));

  });

}

function readyHandler(event)
{
  amp.addEventListener("ended", endedHandler);
  loadVideo(0);
}


function loadVideo(index)
{
  getMedia(index+1, function(media){
    console.log(media[0]);
    amp.setMedia(media[0]);
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

function togglePlayButton(isPlaying){
  if(isPlaying){
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
  togglePlayButton(true);
}else{
 amp.pause();
togglePlayButton(false);
}
}

function setVolume(value){
  amp.setVolume(value/20);
}

function toggleCS(){
  if($('.full-screen #crowdsurfing-wrapper').is(":visible")){
  $('.full-screen #crowdsurfing-wrapper').hide();
  $('.csBtn').html('Show Crowdsurfing');
}else{
  $('.full-screen #crowdsurfing-wrapper').show();
  $('.csBtn').html('Hide Crowdsurfing');
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