

/**********FourSquare***************/

function foursquareLoad() {
  var x = document.getElementById('fsqBox').innerHTML;
  console.log(x);

$.getJSON('https://api.foursquare.com/v2/venues/'+
          locations[0].foursquare + '?' +
          '&client_id=S3ODC4ML2SGHVY2H1K03NTC3EFA5RFGQIAXJKHI4LRTBUSG5'
          +'&client_secret=O2FJ2QOLXEY0Z41TTVZNCQSBQZRP2BB25LNL1RWA2UA2LM3M&v=20162016',
    function(data) {
        $.each(data.response, function(venue){
            content = '<p> Checked in: ' +
            data.response.venue.hereNow.count + '<br>' +
            data.response.venue.name +
            '</p>';
            $(content).appendTo("#names");
       });
});
}
