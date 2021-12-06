/* global TW */
TW.IDE.Widgets.faviconmanager = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/FaviconManagerWidget/ui/faviconmanager/favicon.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'FaviconManager',
      'description': 'Widget to manage browser favicon',
      'category': ['Common'],
      'iconImage': 'favicon.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'favicon': {
          'isVisible': true,
          'baseType': 'IMAGELINK',
          'isBindingTarget': true,
          'isEditable': true,
          'description': 'the source URL or the media entity containing the favicon'
        }        
      }
    };
  };

  this.widgetEvents = function () {
    return {
    };
  };

  this.widgetServices = function () {
    return {
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-faviconmanager">' + '<span class="faviconmanager-property">Favicon Manager</span>' + '</div>';
  };
};