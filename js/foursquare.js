/**********FourSquare***************/
function foursquareLoad() {
  for (var i = 0; i < markers.length; i++) {
    var $names = $('#names');
    $names.text("");
    if (markers[i].id == locations[i].id) {
    var fsqUrl = "https://api.foursquare.com/v2/venues/"+
              "search?ll=" + locations[i].location.lat +","+ locations[i].location.lng +
              "&query=" + locations[i].title +
              "&client_id=S3ODC4ML2SGHVY2H1K03NTC3EFA5RFGQIAXJKHI4LRTBUSG5" +
              "&client_secret=O2FJ2QOLXEY0Z41TTVZNCQSBQZRP2BB25LNL1RWA2UA2LM3M" +
              "&v=20162016"

    $.ajax({
      url: fsqUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function(response) {
        var data = response.response.venues[0];
        console.log(response.response.venues[0].name);
        console.log(data);
        content = '<div style="border: solid; padding-left: 2%; padding-right: 2%;"> <p> Location: ' + data.name + '<br>' + '</p>' +
                  '<p> Checked In: ' + data.hereNow.count + '</p>' +
                  '<p> Phone: ' + data.contact.formattedPhone + '</p></div>' ;
                  $(content).appendTo("#names");
                }
              })
            }
          }
        }
