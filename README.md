# Async Google Maps

Uses the Google Maps API to asynchronously embed a simple map similar to the iframe embed code you can get from Google but without the `iframe`.

Demo: [http://tinyfly.github.com/AsyncMaps/](http://tinyfly.github.com/AsyncMaps/)

## Usage

This init function takes a configuration object. Minimum usage requires three things:

1. latitude,
2. longitude
3. A `div` on the page with an ID of `map-canvas`

```js
$(window).load(function() {
  asyncMaps.maps.init({
    lat: 37.423156,
    lng: -122.084917
  });
});

```

## Options

### mapOuter

- **Type:** String
- **Default:** '#map-canvas'

ID or jQuery selector of the element in which to insert the map.

### address

- **Type:** String
- **Default:** null

ID or jQuery selector of element containing map address. If provided the text or HTML in this element will populate the info window popup that appears when the map marker is clicked.

### zoomLevel

- **Type:** Integer
- **Default:** 15

Number corresponding to google's map zoom levels

### apiKey

- **Type:** String
- **Default:** null

Your maps API key if you wish to use one.

### lat

- **Type:** Float
- **Default:** null

Location latitude

### lng

- **Type:** Float
- **Default:** null

Location longitude

## Dependencies

- jQuery 1.7.x+