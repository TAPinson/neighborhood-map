
function AppViewModel() {
  console.log('in AppViewModel');
  markers = [
    { title: 'Bridgestone Arena', location: {lat: 36.1592, lng: -86.7785}},
    { title: 'Nashville Zoo', location: {lat: 36.1392, lng: -86.7415}},
    { title: 'The Parthenon', location: {lat: 36.1497, lng: -86.8133}},
    { title: 'Adventure Science Center', location: {lat: 36.1465, lng: -86.7754}},
    { title: 'Tennessee Performing Arts Center', location: {lat: 36.166156, lng: -86.776865}}
  ];

  this.position = ko.observable(markers.location);

  map = ko.observable();
  this.chosenHotspot = ko.observable();
  this.resetHotspot = function() { this.chosenHotspot(null) }
}

ko.applyBindings(new AppViewModel());



function initMap() {
  var nashville = {lat: 36.1527, lng: -86.7618};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: nashville,
  });
  // Adds a marker at the center of the map.
  addMarker()
}


// Adds a marker to the map and push to the array.
function addMarker() {
  for (var i = 0; i < markers.length; i++) {
  var marker = new google.maps.Marker({
    position: this.position,
    title: this.title,
    map: map
  });}
  markers.push(marker);
  ;
}


// This function will loop through the listings and hide them all.
function hideMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);}}
hideMarkers()
