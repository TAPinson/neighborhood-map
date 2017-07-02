// Initialize the map
var map;




var ViewModel = function(map, markers) {
  // Create a new blank array for all the listing markers.
  this.markers = ko.observableArray([]);
  


  locations = [
  {
    title: 'BridgestoneArena',
    location: {lat: 36.15, lng: -86.77},
    id: 0
  },
  {
    title: 'NashvilleZoo',
    location: {lat: 36.1392, lng: -86.7415},
    id: 1
  },
  {
    title: 'NashvilleParthenon',
    location: {lat: 36.1497, lng: -86.8133},
    id: 2
  },
  {
    title: 'AdventureScienceCenter',
    location: {lat: 36.1465, lng: -86.7754},
    id: 3
  },
  {
    title: 'TennesseePerformingArtsCenter',
    location: {lat: 36.166156, lng: -86.776865},
    id: 4  }
];
  this.locList = ko.observableArray([]);
  this.chosenHotspot = ko.observable();
  this.currentLoc = ko.observable( this.locList()[0] );

}
