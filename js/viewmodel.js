markers = [];

function viewModel() {
	var map;
	infowindows = [];
	hotSpots = [
		{title: 'BridgestoneArena', location: {lat: 36.1592, lng: -86.7785}, id: 0},
		{title: 'NashvilleZoo', location: {lat: 36.0892, lng: -86.7415},id: 1},
		{title: 'NashvilleParthenon', location: {lat: 36.1497, lng: -86.8133}, id: 2},
		{title: 'AdventureScienceCenter', location: {lat: 36.1465, lng: -86.7754}, id: 3},
		{title: 'TennesseePerformingArtsCenter', location: {lat: 36.1661644, lng: -86.7824}, id: 4},
		{title: 'ComputerProsNashville', location: {lat: 36.1058, lng: -86.8131}, id: 5}
		];
  	this.trashSpot = ko.observable()
  	this.chosenHotspot = ko.observable();

    this.markers=ko.observableArray([]);

}
