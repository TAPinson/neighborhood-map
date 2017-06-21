

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
  var id = document.getElementById('idBox').innerHTML;
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






  // Check to make sure the infowindow is not already opened on this marker.
  if (infoMarker != marker) {






    // load wikipedia data
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + document.getElementById('titleBox').innerHTML + '&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function(){
      $wikiElem.text("failed to get wikipedia resources");
    }, 6000);

    $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function( response ) {
        var articleList = response[1];
        var artileDesc = response[2];
        for (var i = 0; i < articleList.length; i++) {
          articleStr = articleList[i];
          var url = 'http://en.wikipedia.org/wiki/' + articleStr;
          var placer = '<a href="' + url + '"><h3>' + articleStr + '</h3></a> <p>' + artileDesc;
          console.log(placer);
          infoMarker = "marker";
          infowindow.setContent('information displayed here');
          for (var i = 0; i < markers.length; i++)
          if (marker.title == locations[i].title) {
            infowindow.setContent(placer + '<p>' + locations[i].tweets);
            twttr.widgets.load(document.getElementById("infobox"))
          };
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker = null;
          });
        }
      }
    });
    clearTimeout(wikiRequestTimeout);
  }
  return false;
;}












// END OF GOOGLE MAP RENDERING //



ko.applyBindings(new ViewModel);
