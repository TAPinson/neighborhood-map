function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 36.1527, lng: -86.7618}
  });

  setMarkers(map);
}


function AppViewModel() {
  console.log('in AppViewModel')
  this.hotspots = [
    {title: 'Bridgestone Arena', location: {lat: 36.1592, lng: -86.7785}},
    {title: 'Nashville Zoo', location: {lat: 36.1392, lng: -86.7415}},
    {title: 'The Parthenon', location: {lat: 36.1497, lng: -86.8133}},
    {title: 'Adventure Science Center', location: {lat: 36.1465, lng: -86.7754}},
    {title: 'Tennessee Performing Arts Center', location: {lat: 36.166156, lng: -86.776865}}
  ];
  this.title = ko.observable(hotspots.title);
  this.position = ko.observable(hotspots.position);

}

ko.applyBindings(AppViewModel())

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/spotflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < hotspots.length; i++) {
    var spot = hotspots[i];
    var marker = new google.maps.Marker({
      position: hotspots[i].location,
      map: map,
      title: hotspots[i].title

    });
  }
}
