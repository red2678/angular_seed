'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.search')
    .controller('SearchController', [
      'uiGmapIsReady',
      'uiGmapGoogleMapApi',
      '$firebaseArray',
      SearchController
    ]);

  function SearchController(uiGmapIsReady, uiGmapGoogleMapApi) {
    const $ctrl = this;
    $ctrl.places= [];

    $ctrl.map = {
      center: {
        latitude: 34.4258,
        longitude: -119.7142
      },
      zoom: 8,
      pan: false,
      markers: []
    };

    // TODO: make Angular service for this, global at app level?
    uiGmapIsReady.promise()
      .then(function (maps) {
        $ctrl.gmap = maps[0].map;
        $ctrl.placesService = new google.maps.places.PlacesService(maps[0].map);

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(setUpPlacesApi);
      });


    function setUpPlacesApi(maps) {
      var sb = new google.maps.LatLng($ctrl.map.center.latitude, $ctrl.map.center.longitude);

      // Specify location, radius and place types for your Places API search.
      var request = {
        location: sb,
        radius: '10000',
        types: ['restaurant', 'bar', 'meal_delivery', 'meal_takeaway', 'night_club']
      };

      // Create the PlaceService and send the request.
      // Handle the callback with an anonymous function.
      //var service = new google.maps.places.PlacesService(map);
      $ctrl.placesService.nearbySearch(request, function (results, status) {
        console.log(results);

        $ctrl.places = results;

        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            // If the request succeeds, draw the place location on
            // the map as a marker, and register an event to handle a
            // click on the marker.
            var marker = new google.maps.Marker({
              map: $ctrl.gmap,
              position: place.geometry.location
            });
          }
        }
      });

      var placeRequest = {
        placeId: 'ChIJyeOxC4sT6YARYG4vXRu9j_w'
      };

      $ctrl.placesService.getDetails(placeRequest, function (place, status) {
        console.log('Place:: ', place);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // If the request succeeds, draw the place location on the map
          // as a marker, and register an event to handle a click on the marker.

        }
      });
    }
  }
})();
