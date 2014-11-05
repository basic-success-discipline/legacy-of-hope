akamai.amp.freewheel = {};

akamai.amp.freewheel.ChromeCastRenderer = (function() {

  /**
   * @constructor
   */
  function ChromeCastRenderer() {
    this.handlers = {
      timeupdate: this.ontimeupdate.bind(this),
      ended: this.onended.bind(this),
      canplaythrough: this.oncanplaythrough.bind(this)
    };
  }

  ChromeCastRenderer.prototype.player = null;

  ChromeCastRenderer.prototype.host = null;

  ChromeCastRenderer.prototype.video = null;

  ChromeCastRenderer.prototype.rendererController = null;

  ChromeCastRenderer.prototype.protocol = null;

  ChromeCastRenderer.prototype.handlers = null;

  ChromeCastRenderer.prototype.sentQuartiles = 0;


  /** 
   *
   */
  ChromeCastRenderer.prototype.log = function(msg) {
    console.log("%c [ChromeCastRenderer] " + msg, 'color: #00CC00');
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.start = function(rendererController) {
    var ad, asset, handler, type, types, _ref;
    this.rendererController = rendererController;
    this.log('start');
    ad = rendererController.getAdInstance();
    asset = ad.getActiveCreativeRendition().getPrimaryCreativeRenditionAsset();
    this.video = ad.getRendererController().getContentVideoElement();
    if (this.video.src != null) {
      this.video.src = null;
    }
    _ref = this.handlers;
    for (type in _ref) {
      handler = _ref[type];
      this.video.addEventListener(type, handler);
    }
    if (akamai.amp.utils.Logger.enabled === true) {
      cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG);
    }
    this.host = new cast.player.api.Host({
      'mediaElement': this.video,
      'url': asset.getUrl().replace("akamaihd", "akamaihd-staging")
    });
    this.host.onError = (function(_this) {
      return function(errorCode) {
        _this.error("Google Media Player Fatal Error - " + errorCode);
      };
    })(this);
    types = akamai.amp.utils.Utils.mimeTypes;
    switch (asset.getMimeType()) {
      case types.m3u8:
        this.protocol = cast.player.api.CreateHlsStreamingProtocol(this.host);
        break;
      case types.mpd:
        this.protocol = cast.player.api.CreateDashStreamingProtocol(this.host);
        break;
      case types.ism:
        this.protocol = cast.player.api.CreateSmoothStreamingProtocol(this.host);
    }
    if (this.protocol != null) {
      this.player = new cast.player.api.Player(this.host);
      this.player.load(this.protocol, 0);
      this.rendererController.handleStateTransition(tv.freewheel.SDK.RENDERER_STATE_STARTED);
    } else {
      this.error("Google Media Player Error: Could not create protocol");
    }
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.stop = function() {
    this.log('stop');
    this.unload();
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.info = function() {
    return {
      moduleType: tv.freewheel.SDK.MODULE_TYPE_RENDERER
    };
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.getPlayheadTime = function() {
    return this.video.currentTime;
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.getDuration = function() {
    return this.video.duration;
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.error = function(msg) {
    this.log("error: " + msg);
    if (msg != null) {
      akamai.amp.utils.Logger.error(msg);
    }
    this.unload(tv.freewheel.SDK.RENDERER_STATE_FAILED);
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.unload = function(state) {
    var handler, type, _ref;
    this.log('unload');
    this.host = null;
    this.protocol = null;
    this.player.unload();
    this.player = null;
    _ref = this.handlers;
    for (type in _ref) {
      handler = _ref[type];
      this.video.removeEventListener(type, handler);
    }
    this.video.src = null;
    if (state != null) {
      this.rendererController.handleStateTransition(state);
    }
    this.rendererController = null;
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.oncanplaythrough = function(event) {
    this.video.play();
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.ontimeupdate = function(event) {
    var progress;
    progress = this.getPlayheadTime() / this.getDuration();
    if (progress > 0.25 && this.sentQuartiles < 1) {
      this.log('first quartile');
      this.rendererController.processEvent({
        name: tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE
      });
      this.sentQuartiles = 1;
    }
    if (progress > 0.5 && this.sentQuartiles < 2) {
      this.log('second quartile');
      this.rendererController.processEvent({
        name: tv.freewheel.SDK.EVENT_AD_MIDPOINT
      });
      this.sentQuartiles = 2;
    }
    if (progress > 0.75 && this.sentQuartiles < 3) {
      this.log('third quartile');
      this.rendererController.processEvent({
        name: tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE
      });
      this.sentQuartiles = 3;
    }
    if (progress > 0.99 && this.sentQuartiles < 4) {
      this.log('fourth quartile');
      this.rendererController.processEvent({
        name: tv.freewheel.SDK.EVENT_AD_COMPLETE
      });
      this.sentQuartiles = 4;
    }
  };


  /** 
   *
   */
  ChromeCastRenderer.prototype.onended = function(event) {
    this.log('onended');
    this.unload(tv.freewheel.SDK.RENDERER_STATE_COMPLETED);
  };

  return ChromeCastRenderer;

})();