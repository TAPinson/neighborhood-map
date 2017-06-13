

// This function populates the infowindow with the Twitter widget in the infowindow
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = "marker";
    infowindow.setContent("<div>" + marker.title + "</div>");

    if (marker.title == "Nashville Zoo") {
      infowindow.setContent("<div>" + marker.title + "</div><a class='twitter-timeline href='https://www.twitter.com/hashtag/NashvilleZoo' data-widget-id='868900216082190336'> Tweets </a>");
      twttr.widgets.load(document.getElementById("infobox"))};

    if (marker.title == "Adventure Science Center") {
      infowindow.setContent("<div>" + marker.title + "</div><a class='twitter-timeline' href='https://twitter.com/search?q=adventure%20science%20center' data-widget-id='868889405167194112'>" + "Tweets" + "</a>");
      twttr.widgets.load(document.getElementById("infobox"))};

    if (marker.title == "The Parthenon") {
      infowindow.setContent("<div>" + marker.title + "</div><a class='twitter-timeline href='https://twitter.com/search?q=%23nashville%20%23parthenon' data-widget-id='868899128100753408'>" + "Tweets" + "</a>");
      twttr.widgets.load(document.getElementById("infobox"));}

    if (marker.title == "Bridgestone Arena") {
      infowindow.setContent("<div>" + marker.title + "</div><a class='twitter-timeline' href='https://twitter.com/hashtag/BridgestoneArena' data-widget-id='868898437907042304'> Tweets </a>");
      twttr.widgets.load(document.getElementById("infobox"));}

    if (marker.title == "Tennessee Performing Arts Center") {
      infowindow.setContent("<div>" + marker.title + "</div><a class='twitter-timeline' href='https://twitter.com/hashtag/TPAC' data-widget-id='869261143428259840'> Tweets</a>");
      twttr.widgets.load(document.getElementById("infobox"));};

    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });}}


// This function will loop through the markers array and display them all.
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

document.getElementById('show-listings').addEventListener('click', showListings);
document.getElementById('hide-listings').addEventListener('click', hideListings);
