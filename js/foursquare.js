/**********FourSquare***************/

function foursquareLoad() {
var $names = $('#names');
$names.text("");
var workingTitle = document.getElementById('fsqBox').innerHTML;

var fsqUrl = "https://api.foursquare.com/v2/venues/"+
              "search?ll=" + locations[0].location.lat +","+ locations[0].location.lng +
              "&query=" + locations[0].title +
              "&client_id=S3ODC4ML2SGHVY2H1K03NTC3EFA5RFGQIAXJKHI4LRTBUSG5" +
              "&client_secret=O2FJ2QOLXEY0Z41TTVZNCQSBQZRP2BB25LNL1RWA2UA2LM3M" +
              "&v=20162016"




$.ajax({
    url: fsqUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success:

    function(response) {
      console.log(response.response.venues[0].name);
      console.log(response);
      content = '<p> Checked in: ' + response + '<br>' + '</p>';
      $(content).appendTo("#names");
        }

})}
