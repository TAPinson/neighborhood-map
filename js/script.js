function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.1527, lng: -86.7618},
        zoom: 13});

}

function populateStarter() {
	var largeInfowindow = new google.maps.InfoWindow();
    populateInfoWindow(this, largeInfowindow);
}

// END OF GOOGLE MAP RENDERING //

// This function will loop through the markers array and display them all.
function showListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  console.log(this.chosenHotspot().title);
  //var bounds = new google.maps.LatLngBounds();
  var id = this.chosenHotspot().id;
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[id].setMap(map);
    //bounds.extend(markers[i].position);
    }
    //map.fitBounds(bounds);
    var marker = new google.maps.Marker({
      map: map,
      position: this.chosenHotspot().location,
      title: this.chosenHotspot().title,
      animation: google.maps.Animation.DROP,
      id: i
    });
    var pos = this.chosenHotspot().location;
    var mtitle = this.chosenHotspot().title;
    var mID = this.chosenHotspot().id;
    console.log('id' + this.chosenHotspot().id);
  populateInfoWindow(marker, pos, mtitle, mID)
}


function showOneListing() {
  var id = this.chosenHotspot().id;
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
function populateInfoWindow(marker, pos, mtitle, mID) {
  var infowindow = new google.maps.InfoWindow();
  console.log('pos = ' + pos.lat); 
  console.log('mtitle = ' + mtitle); 
  var marker = new google.maps.Marker({
      map: map,
      position: pos,
      title: mtitle,
      animation: google.maps.Animation.DROP,
      id: mID
    });
  // shorten infowindow.marker
  var infoMarker = infowindow.marker;
  // Information for requesting data from wikipedia
  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';
  // set six second timer in case of connection issues
  var wikiRequestTimeout = setTimeout(function(){
    alert("Communication with Wikipedia has failed.");
  }, 6000);
  // Get wikipedia data
  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function( data ) {
      var wikiTitle = data[1];
      var wikiDesc = data[2];
      var wikiMarkerUrl = data[3];
      var largeInfowindow = new google.maps.InfoWindow();
      largeInfowindow.open(map, marker);
      largeInfowindow.setContent('<b>' + wikiTitle + '</b><p>' +
                            wikiDesc + '<p>' +
                            '<a href=' + wikiMarkerUrl + '>' + wikiTitle + '</a>');
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
      });
      clearTimeout(wikiRequestTimeout);
    }
  });
}

ko.applyBindings(new ViewModel());