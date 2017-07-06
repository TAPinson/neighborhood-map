ko.applyBindings(new viewModel());

var googleRequestTimeout = setTimeout(function(){
	alert("Communication with Google has failed.");
}, 6000);

function initMap() {
  var nashville = {lat: 36.1527, lng: -86.7618};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: nashville,
  });
  // Adds a marker at the center of the map.
  addMarkers();
	clearTimeout(googleRequestTimeout);
}

// Adds a marker to the map and push to the array.
function addMarkers() {
	deleteMarkers();
  	for (var i = 0; i < hotSpots.length; i++){
    	var marker = new google.maps.Marker({
      		position: hotSpots[i].location,
      		title: hotSpots[i].title,
      		id: hotSpots[i].id,
      		animation: google.maps.Animation.DROP,
      		map: map
      	});
    	markerListener(marker);
    	markers.push(marker);
    }
}

function markerListener(marker){
	marker.addListener('click', function() {
		console.log(marker.title);
		populateIndoWindow(marker);
	})
}

// Adds a marker to the map and push to the array.
function addOneMarker(location) {
    var marker = new google.maps.Marker({
      position: this.chosenHotspot().location,
      title: this.chosenHotspot().title,
      id: this.chosenHotspot().id,
      animation: google.maps.Animation.DROP,
      map: map
    });
     marker.addListener('click', function() {
     	console.log(marker.title);
    });
    markers.push(marker);
    populateIndoWindow(marker);
}

// Adds a marker to the map and push to the array after clearing map of other markers.
function onlyOneMarker() {
	deleteMarkers();
	var marker = new google.maps.Marker({
		position: this.chosenHotspot().location,
    title: this.chosenHotspot().title,
    id: this.chosenHotspot().id,
    animation: google.maps.Animation.DROP,
    map: map
	});
	marker.addListener('click', function() {
     	console.log(marker.title);
    });
  markers.push(marker);
  populateIndoWindow(marker);
}

// Adds am infowindow to the map and push to the array.
function populateIndoWindow(marker){
	// set six second timer in case of wikipedia communication issues
	var wikiRequestTimeout = setTimeout(function(){
		alert("Communication with Wikipedia has failed.");
	}, 6000);
  $.ajax({
    url: 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback',
    dataType: "jsonp",
    jsonp: "callback",
    success: function( data ) {
      var wikiTitle = data[1];
      var wikiDesc = data[2];
      var wikiMarkerUrl = data[3];
      var infowindow = new google.maps.InfoWindow();
      infowindow.open(map, marker);
      infowindow.setContent(
																'<b>' +wikiTitle + '</b><p>' +
																wikiDesc +
																'<a href=' + wikiMarkerUrl + '>' + wikiTitle + '</a>'
															);
			clearTimeout(wikiRequestTimeout);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
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

function deleteOneMarker() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].title == this.trashSpot().title){
      setMapOnAll(null);
    	var index = markers.indexOf(markers[i]);
 	  	markers.splice(index, 1);
 	  	for (var i = 0; i < markers.length; i++){
 	  		markers[i].setMap(map);
 	  	}
 	  }
 	}
 }
