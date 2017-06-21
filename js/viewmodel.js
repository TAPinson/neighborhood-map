// Initialize the map
var map;

// Create a new blank array for all the listing markers.
var markers = [];

var ViewModel = function(map, markers) {
  locations = [
  {
    title: 'Bridgestone Arena',
    location: {lat: 36.15, lng: -86.77},
    id: 0,
    tweets: "<a class='twitter-timeline' href='https://twitter.com/hashtag/BridgestoneArena' data-widget-id='868898437907042304'>Tweets</a>"
  },
  {
    title: 'Nashville Zoo',
    location: {lat: 36.1392, lng: -86.7415},
    id: 1,
    tweets: "<a class='twitter-timeline' href='https://www.twitter.com/hashtag/NashvilleZoo' data-widget-id='868900216082190336'>Tweets</a>"
  },
  {
    title: 'Nashville Parthenon',
    location: {lat: 36.1497, lng: -86.8133},
    id: 2,
    tweets: "<a class='twitter-timeline' href='https://twitter.com/search?q=%23nashville%20%23parthenon' data-widget-id='868899128100753408'>Tweets</a>"
  },
  {
    title: 'Adventure Science Center',
    location: {lat: 36.1465, lng: -86.7754},
    id: 3,
    tweets: "<a class='twitter-timeline' href='https://twitter.com/search?q=adventure%20science%20center' data-widget-id='868889405167194112'>Tweets</a>"
  },
  {
    title: 'Tennessee Performing Arts Center',
    location: {lat: 36.166156, lng: -86.776865},
    id: 4,
    tweets: "<a class='twitter-timeline' href='https://twitter.com/hashtag/TPAC' data-widget-id='869261143428259840'>Tweets</a>"
  }
];
  this.locList = ko.observableArray([]);
  this.chosenHotspot = ko.observable();
  this.currentLoc = ko.observable( this.locList()[0] );
}
