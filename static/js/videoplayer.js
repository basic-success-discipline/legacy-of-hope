 akamai.amp.AMP.loadDefaults("/akamai/amp/amp.xml");

 var amp,
 menu = new FeedMenu();

 function getMedia(callback){
  $.post( "/video", { Angle: 1, GiftCode: "" })
  .done(function( data ) {

    var url = data.URL;

    media = [
    {
      autoplay: true,
      title: "Demo Live Stream",
      poster: '/akamai/resources/images/bunny.jpg',
      temporalType: "live",
      source: 
      [
      {src: url, type:"video/mp4"}
      ],
      mediaanalytics:
      {
        dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
      }
    }, {
      autoplay: true,
      title: "Demo Live Stream",
      poster: '/akamai/resources/images/bunny.jpg',
      temporalType: "live",
      source: 
      [
      {src: "http://multiformatlive-f.akamaihd.net/z/demostream_1@2131/manifest.f4m", type: "video/f4m"},
      {src: "http://multiformatlive-f.akamaihd.net/i/demostream_1@2131/master.m3u8", type: "application/x-mpegURL"}
      ],
      mediaanalytics:
      {
        dimensions: { title: "TITLE3", eventName: "EVENTNAME3" }
      }
    }
    ];

  }).fail(function() {
    alert( "error" );
  }).always(function(){
    callback(media);
  });
}

function loadHandler(event)
{

  getMedia(function(media){
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
  getMedia(function(media){
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