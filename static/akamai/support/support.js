var SupportSection, SupportSectionList,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SupportSection = (function() {
  function SupportSection() {
  }

  SupportSection.prototype.captureConfig = function(config) {};

  SupportSection.prototype.captureFeed = function(feed) {};

  SupportSection.prototype.populateForm = function(config) {};

  return SupportSection;

})();

SupportSectionList = (function(_super) {
  __extends(SupportSectionList, _super);

  function SupportSectionList() {
    SupportSectionList.__super__.constructor.call(this);
  }

  SupportSectionList.prototype.captureConfig = function(config) {
    var section, _i, _len;

    if (config == null) config = {};
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      section = this[_i];
      section.captureConfig(config);
    }
    return config;
  };

  SupportSectionList.prototype.captureFeed = function(feed) {
    var section, _i, _len;

    if (feed == null) feed = {channel: {item: {}}};
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      section = this[_i];
      section.captureFeed(feed);
    }
    return feed;
  };

  SupportSectionList.prototype.populateForm = function(config) {
    var section, _i, _len, _results;

    _results = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      section = this[_i];
      _results.push(section.populateForm(config));
    }
    return _results;
  };

  return SupportSectionList;

})(Array);