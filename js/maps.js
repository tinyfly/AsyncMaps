/* ==========================================================
 * maps.js
 * Plots an event location and inserts it into the page.
 * ==========================================================
 * Revealing Module Pattern: http://bit.ly/nyqIfp
 * Requires jQuery, Google Maps API Key
 * ========================================================== */

/*globals jQuery, google */

var tinyfly = tinyfly || {};

tinyfly.maps = (function ($) {
  var init;
  var load;
  var insert;
  var $mapOuter;
  var $address;
  var settings = {
    mapOuter: '#map-canvas',
    address: '#address',
    zoomLevel: 15,
    apiKey: null,
    lat: null,
    lng: null
  };

  /* options {object} augments the settings object */
  init = function (options) {
    var location = [];

    $.extend(settings, options);

    $mapOuter = $(settings.mapOuter);
    $address = $(settings.address).clone();

    if (!$mapOuter.length) {
      return;
    }

    load();
  };

  //asyncronysly load the google maps script
  load = function() {
    var $script = $('<script />');
    var key = (settings.apiKey) ? 'key=' + settings.apiKey + '&': '';
    //allow for running from file system.
    var protocol = (location.protocol === 'file:') ? 'http://' : '//';

    $script.attr('src', protocol + 'maps.googleapis.com/maps/api/js?' + key + 'sensor=false&callback=tinyfly.maps.insert');
    $('body').append($script);
  };

  insert = function() {
    var location = new google.maps.LatLng(settings.lat, settings.lng);
    var map;
    var marker;
    var infoWindow;

    //build map
    map = new google.maps.Map($mapOuter.get(0), {
      zoom: settings.zoomLevel,
      center: location,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //add the loation marker
    marker = new google.maps.Marker({
      position: location,
      map: map
    });

    //build popup window
    if ($address.length) {
      infoWindow = new google.maps.InfoWindow({
        content: $address.addClass('mbn').wrap('<div>').parent().html()
      });

      //open popup window when marker is clicked
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
      });
    }
  };

  return {
    init: init,
    //make public so it can be used as a callback from the maps api script
    insert: insert
  };
}(jQuery));