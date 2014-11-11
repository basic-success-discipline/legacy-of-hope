 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");




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

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest(angle, giftcode) {
  // All HTML5 Rocks properties support CORS.
 
 var url = 'https://ipms-dev.appspot.com/ipms/events/LOH20141203/streams/' + angle + "/hds";
if(giftcode && giftcode !=""){
  url= url+"?giftcode="+giftcode;
}
url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    console.log("response Text: " + text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}





 var amp,
 menu = new FeedMenu(),
 giftcode = "",
 premium = true,
 media = [];

 function getMedia(angle, callback){
  makeCorsRequest(angle, giftcode);
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
}

function loadHandler(event)
{

  getMedia(1, function(media){
    menu.create(document.getElementById("sample-menu"), media);
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
  });

}

function readyHandler(event)
{

  amp.addEventListener("ended", endedHandler);
  loadVideo(0);
}

function advanceHandler(event)
{

  loadVideo(menu.selectedIndex + 1);
}

function loadVideo(index)
{


  menu.select(index);
  getMedia(index+1, function(media){
    console.log(media[index]);
    amp.setMedia(media[index]);
  });
}

function endedHandler(event)
{

  console.log("ended");
}




var csfs = new CsFullscreen({
  wrapper: '#sample-video-area', //css selector
csWrapper: document.getElementById('crowdsurfing-wrapper'), //DOM node
playerWrapper: '.sample-player',

});



function toggle(){
  // premium = !premium;

  // getMedia(1, function(media){
  //   menu.create(document.getElementById("sample-menu"), media);
  // });
}