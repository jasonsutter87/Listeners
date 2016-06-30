
function initMap() {
  var loggedin;
  $.ajax({
   url: "/logged_in",
   success: function(response){
      loggedin = response
        var myLatLng = {lat: 37.784701, lng: -122.397783};
         var myLatLng2 = {lat: 37.787757, lng:  -122.407832};



      var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
          center: myLatLng,
          zoom: 14
      });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">DBC</h1>'+
            '<div id="bodyContent">'+
            '<p><b>DBC</b>, also referred to as <b>Devboot camp</b>, is a coding ' +
            'bootcamp in san francisco </p>'+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var contentString1 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Union Square</h1>'+
            '<div id="bodyContent">'+
            '<p>Union Square, is located in SF </p>'+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });

        var marker;
        if (loggedin){
          marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Devboot Camp (DBC)'
          });


          marker2 = new google.maps.Marker({
            position: myLatLng2,
            map: map,
            title: 'Devboot Camp (DBC)'
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

            marker2.addListener('click', function() {
            infowindow1.open(map, marker2);
          });
        }
    }});

    }




$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
