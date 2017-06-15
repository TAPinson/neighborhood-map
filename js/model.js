var markers = [];

function AppViewModel() {
  console.log('in AppViewModel');
  markers = [
    { title: 'Bridgestone Arena', location: {lat: 36.1592, lng: -86.7785}, id: 0},
    { title: 'Nashville Zoo', location: {lat: 36.1392, lng: -86.7415}, id: 1},
    { title: 'The Parthenon', location: {lat: 36.1497, lng: -86.8133}, id: 2},
    { title: 'Adventure Science Center', location: {lat: 36.1465, lng: -86.7754}, id: 3},
    { title: 'Tennessee Performing Arts Center', location: {lat: 36.166156, lng: -86.776865}, id: 4}
  ];
  this.title = ko.observable(markers.title);
  this.location = ko.observable(markers.location);
  this.id = ko.observable(markers.id);
  this.chosenHotspot = ko.observable(markers.id);
  this.resetHotspot = function() { this.chosenHotspot(null) }

}





function initMap() {
  var nashville = {lat: 36.1527, lng: -86.7618};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: nashville,
  });
  addMarker();
}


// Adds a marker to the map and push to the array.
function addMarker() {
  console.log("adding markers...");
  console.log(this.id);
  var id = markers[0].id;
  console.log(id);
  (id++);
  console.log(id);
  var marker = new google.maps.Marker({
    position: markers[id].location,
    title: markers[id].title,
    map: map
  });
  markers.push(marker);
};


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  console.log('clearing markers...')
  setMapOnAll(null);
}

ko.applyBindings(new AppViewModel());
