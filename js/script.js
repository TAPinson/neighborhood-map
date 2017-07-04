var hotSpots = [
{  title: 'BridgestoneArena', location: {lat: 36.15, lng: -86.77}, id: 0},
{  title: 'NashvilleZoo', location: {lat: 36.1392, lng: -86.7415},id: 1},
{  title: 'NashvilleParthenon', location: {lat: 36.1497, lng: -86.8133}, id: 2},
{  title: 'AdventureScienceCenter', location: {lat: 36.1465, lng: -86.7754}, id: 3},
{  title: 'TennesseePerformingArtsCenter', location: {lat: 36.166156, lng: -86.776865}, id: 4}
];


// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];

function initMap() {
  var nashville = {lat: 36.1527, lng: -86.7618};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: nashville,
  });

  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
  addMarker(nashville);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {



  for (var i = 0; i < hotSpots.length; i++){

    var marker = new google.maps.Marker({
      position: hotSpots[i].location,
      title: hotSpots[i].title,
      id: hotSpots[i].id,
      animation: google.maps.Animation.DROP,
      map: map
    });

    markers.push(marker);
    populateIndoWindow(marker);
}}

function populateIndoWindow(marker){

    $.ajax({
      url: 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback',
      dataType: "jsonp",
      jsonp: "callback",
      success: function( data ) {
        var wikiTitle = data[1];
        var wikiDesc = data[2];
        var wikiMarkerUrl = data[3];

        var largeInfowindow = new google.maps.InfoWindow();
        largeInfowindow.open(map, marker);
        largeInfowindow.setContent('<b>' +wikiTitle + '</b><p>' +
                                          wikiDesc + 
                                          '<a href=' + wikiMarkerUrl + '>' + wikiTitle + '</a>' );
        // Make sure the marker property is cleared if the infowindow is closed.
        largeInfowindow.addListener('closeclick',function(){
          largeInfowindow.setMarker = null;
        })
      }   
    });
    }
  



// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}