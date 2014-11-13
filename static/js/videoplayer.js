 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");




// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest(angle, giftcode) {
//   // All HTML5 Rocks properties support CORS.

//  var url = 'https://ipms-dev.appspot.com/ipms/events/LOH20141203/streams/' + angle + "/hds";
// if(giftcode && giftcode !=""){
//   url= url+"?giftcode="+giftcode;
// }
// // url = 'http://updates.html5rocks.com';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     console.log("response Text: " + text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };

//   xhr.send();
// }





var amp,
giftcode = "",
premium = true,
media = [
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
  {src: "http://multiformatlive-f.akamaihd.net/z/demostream_1@2131/manifest.f4m", type: "video/f4m"},
  {src: "http://multiformatlive-f.akamaihd.net/i/demostream_1@2131/master.m3u8", type: "application/x-mpegURL"}
  ],
  mediaanalytics:
  {
    dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
  }
},

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
  {src: "http://multiformatlive-f.akamaihd.net/z/demostream_1@2131/manifest.f4m", type: "video/f4m"},
  {src: "http://www.nasa.gov/multimedia/nasatv/NTV-Public-IPS.m3u8", type: "application/x-mpegURL"}
  ],
  mediaanalytics:
  {
    dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
  }
}
];

 // function getMedia(angle, callback){
  // makeCorsRequest(angle, giftcode);
  // $.post( "/video", { Angle: angle, GiftCode: giftcode })
  // .done(function( data ) {

  //   var url = $.parseJSON(data).URL;
  //   console.log(url);
  //   media = [
  //   {
  //     autoplay: true,
  //     title: "Demo Live Stream",
  //     poster: '/akamai/resources/images/bunny.jpg',
  //     temporalType: "live",
  //     source: 
  //     [
  //     {src: url, type:"video/mp4"}
  //     ],
  //     mediaanalytics:
  //     {
  //       dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
  //     }
  //   }];

  //   if(premium){
  //     media = [
  //     {
  //       autoplay: true,
  //       title: "Demo Live Stream",
  //       poster: '/akamai/resources/images/bunny.jpg',
  //       temporalType: "live",
  //       source: 
  //       [
  //       {src: url, type:"video/mp4"}
  //       ],
  //       mediaanalytics:
  //       {
  //         dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
  //       }
  //     },

  //     {
  //       autoplay: true,
  //       title: "Demo Live Stream",
  //       poster: '/akamai/resources/images/bunny.jpg',
  //       temporalType: "live",
  //       source: 
  //       [
  //       {src: url, type:"video/mp4"}
  //       ],
  //       mediaanalytics:
  //       {
  //         dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
  //       }
  //     }
  //     ];
  //   }

  // }).fail(function() {
  //   alert( "error" );
  // }).always(function(){
  //   callback(media);
  // });
// }

function loadHandler(event)
{

  // getMedia(1, function(media){
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

  // });

}

function readyHandler(event)
{

  amp.addEventListener("ended", endedHandler);
  loadVideo(0);
}


function loadVideo(index)
{

  // getMedia(index+1, function(media){
    console.log(media[index]);
    amp.setMedia(media[index]);
  // });
}

function endedHandler(event)
{

  console.log("ended");
}




var csfs = new CsFullscreen({
  wrapper: '.video-area', //css selector
csWrapper: document.getElementById('crowdsurfing-wrapper'), //DOM node
playerWrapper: '.video-player',

});



function playPause(){
 if(amp.getPaused()){
  amp.play();
}else{
 amp.pause();
}
}

function setVolume(value){
  amp.setVolume(value/20);
}