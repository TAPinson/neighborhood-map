/**********Wikipedia***************/

function loadData() {
    var $wikiElem = $('#wikipedia-links');
    // clear out old data before new request
    $wikiElem.text("");
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
              $wikiElem.append('<a href="' + url + '"><h3>' + articleStr + '</h3></a> <p>' + artileDesc);
          };
          clearTimeout(wikiRequestTimeout);
      }
  });
  return false;
};

function wikiClean(){
  var $wikiElem = $('#wikipedia-links');
  // clear out old data before new request
  $wikiElem.text("");
}
