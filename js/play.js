// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  console.log('in AppViewModel')
  markers = ko.observableArray();
}

// Activates knockout.js
ko.applyBindings(new AppViewModel);




var hotspots = [
  ['Bridgestone Arena', 36.1592, -86.7785, 4],
  ['Nashville Zoo', 36.15, -86.7415, 3],
  ['The Parthenon', 36.1497, -86.8133, 2],
  ['Adventure Science Center', 36.1465, -86.7754, 1],
  ['Tennessee Performing Arts Center', 36.166156, -86.776865, 5]

];



// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

  console.log('in AppViewModel')
  markers = ko.observableArray();
  this.position = ko.observable(markers.location);
  this.title = ko.observable(markers.title);

}

// Activates knockout.js
ko.applyBindings(new AppViewModel);


function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.1527, lng: -86.7618},
    zoom: 13,
    mapTypeControl: false
  });
  var largeInfowindow = new google.maps.InfoWindow();
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [
    {title: 'Bridgestone Arena', location: {lat: 36.1592, lng: -86.7785}},
    {title: 'Nashville Zoo', location: {lat: 36.0892, lng: -86.7415}},
    {title: 'The Parthenon', location: {lat: 36.1497, lng: -86.8133}},
    {title: 'Adventure Science Center', location: {lat: 36.1465, lng: -86.7754}},
    {title: 'Tennessee Performing Arts Center', location: {lat: 36.166156, lng: -86.776865}}
  ];
  console.log(markers);
  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });
  // Push the marker to our array of markers.
  markers.push(marker);
  // Create an onclick event to open an infowindow at each marker.
  marker.addListener('click', function() {
    populateInfoWindow(this, largeInfowindow);
  });
}}






















console.log('a');
var self = this;
self.selectedChoice = ko.observable();
self.markers = ko.observableArray[
  {id: "1", name: "Bridgestone Arena", position: {lat: "36.1592", lng: "-86.7785"}},
  {id: "2", name: "Nashville Zoo", position: {lat: "36.1592", lng: "-86.7785"}},
  {id: "3", name: "The Parthenon", position: {lat: "36.1592", lng: "-86.7785"}},
  {id: "4", name: "Adventure Science Center", position: {lat: "36.1592", lng: "-86.7785"}},
  {id: "5", name: "Tennessee Performing Arts Center", position: {lat: "36.1592", lng: "-86.7785"}}
];
self.sendMe = function(){
  alert(ko.toJSON({ selectedLocationId: this.selectedChoice()}));
};






var CountryModel = function(data){
    var self = this;
    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
};


var viewModel = function(data) {
   var self = this;
   self.selectedChoice = ko.observable();
   self.countries = ko.observableArray([
     new CountryModel({id: "1", name: "Bridgestone Arena"}, location: {lat: 36.1592, lng: -86.7785}),
     new CountryModel({id: "2", name: "Nashville Zoo"}, location: {lat: 36.0892, lng: -86.7415}),
     new CountryModel({id: "3", name: "The Parthenon"}, location: {lat: 36.1497, lng: -86.8133}),
     new CountryModel({id: "4", name: "Adventure Science Center"}, {lat: 36.1465, lng: -86.7754}),
     new CountryModel({id: "5", name: "Tennessee Performing Arts Center"}, location: {lat: 36.166156, lng: -86.776865})]);
    self.sendMe = function(){

        alert(ko.toJSON({ selectedCountryId: this.selectedChoice()}));
    };
};

ko.applyBindings(new viewModel());












// This function will loop through the listings and hide them all.
function hideMarkers(map, markers) {
  console.log('attempting to hide markers');
  for (var i = 0; i < self.markers.length; i++) {
    markers[i].setMap(null);}
  }


// This function will loop through the markers array and display them all.
function showListings(map, markers) {
  console.log('attempting to showListings');
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  markers.setMap(map);
  bounds.extend(markers[i].position);
  map.fitBounds(bounds);

}
