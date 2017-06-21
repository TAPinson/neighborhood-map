// Initialize the map
var map;


// Create a new blank array for all the listing markers.
var markers = [];


var ViewModel = function(map, markers) {
  locations = [
  { title: 'Bridgestone Arena', location: {lat: 36.15, lng: -86.77}, id: 0, tweets: "<a class='twitter-timeline' href='https://twitter.com/hashtag/BridgestoneArena' data-widget-id='868898437907042304'>Tweets</a>", foursquare: '4b8c3d87f964a520f7c532e3'},
  { title: 'Nashville Zoo', location: {lat: 36.1392, lng: -86.7415}, id: 1, tweets: "<a class='twitter-timeline' href='https://www.twitter.com/hashtag/NashvilleZoo' data-widget-id='868900216082190336'>Tweets</a>", foursquare: '4b05866bf964a520446122e3'},
  { title: 'Nashville Parthenon', location: {lat: 36.1497, lng: -86.8133}, id: 2, tweets: "<a class='twitter-timeline' href='https://twitter.com/search?q=%23nashville%20%23parthenon' data-widget-id='868899128100753408'>Tweets</a>", foursquare: '4b05866bf964a520456122e3'},
  { title: 'Adventure Science Center', location: {lat: 36.1465, lng: -86.7754}, id: 3, tweets: "<a class='twitter-timeline' href='https://twitter.com/search?q=adventure%20science%20center' data-widget-id='868889405167194112'>Tweets</a>", foursquare: '4b05866bf964a5203e6122e3'},
  { title: 'Tennessee Performing Arts Center', location: {lat: 36.166156, lng: -86.776865}, id: 4, tweets: "<a class='twitter-timeline' href='https://twitter.com/hashtag/TPAC' data-widget-id='869261143428259840'>Tweets</a>", foursquare: '4b5ce0e5f964a520e34829e3'}
];
  this.locList = ko.observableArray([]);
  this.chosenHotspot = ko.observable();
  this.currentLoc = ko.observable( this.locList()[0] );
}


function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.1527, lng: -86.7618},
        zoom: 13});
  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
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
    bounds.extend(markers[i].position);
  }
  // Extend the boundaries of the map for each marker
  map.fitBounds(bounds);
}


// This function will loop through the markers array and display them all.
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  var id = document.getElementById("idBox").innerHTML;
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[id].setMap(map);
    bounds.extend(markers[i].position);}
  map.fitBounds(bounds);
}


function showOneListing() {
  var id = document.getElementById("idBox").innerHTML;
  for (var i = 0; i < markers.length; i++) {
    if  (id != locations[i].id) {
      markers[id].setVisible(false);
      bounds.extend(markers[id].position);
      map.fitBounds(bounds);
    }
  }
}


// This function will loop through the listings and hide them all.
function hideMarkers(markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}


// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  var infoMarker = infowindow.marker;
  var tweetsOpen = '<div>' + marker.title + '</div>';
  // Check to make sure the infowindow is not already opened on this marker.
  if (infoMarker != marker) {
    infoMarker = "marker";
    infowindow.setContent(tweetsOpen);
    for (var i = 0; i < markers.length; i++)
    if (marker.title == locations[i].title) {
      infowindow.setContent(tweetsOpen + locations[i].tweets);
      twttr.widgets.load(document.getElementById("infobox"))};
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });}}
// END OF GOOGLE MAP RENDERING //


ko.applyBindings(new ViewModel);
