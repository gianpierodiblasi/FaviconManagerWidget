/* global TW */
TW.Runtime.Widgets.faviconmanager = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-faviconmanager" style="display:none;"></div>';
    return html;
  };

  this.updateIcon = function () {
    var debugMode = thisWidget.getProperty('debugMode');
    var favicon = thisWidget.getProperty("favicon");

    if (debugMode) {
      console.log("Favicon Manager -> favicon: " + favicon);
    }

    if (favicon) {
      var link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      var regExp = new RegExp('^(?:[a-z]+:)?//', 'i');
      link.href = regExp.test(favicon) ? favicon : ("../MediaEntities/" + favicon);
    }
  };

  this.afterRender = function () {
    this.updateIcon();
  };

  this.updateProperty = function (updatePropertyInfo) {
    var properties = [
      "debugMode", "favicon"
    ];

    if (properties.indexOf(updatePropertyInfo.TargetProperty) !== -1) {
      this.setProperty(updatePropertyInfo.TargetProperty, updatePropertyInfo.RawSinglePropertyValue);
    }

    if (updatePropertyInfo.TargetProperty === "favicon") {
      this.updateIcon();
    }
  };
};