
function initMap() {
  var loggedin;
  $.ajax({
   url: "/logged_in",
   success: function(response){
      loggedin = response
        var myLatLng = {lat: 37.784701, lng: -122.397783};

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

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker;
        if (loggedin){
          console.log("jahskjdhkajsh");
          marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Devboot Camp (DBC)'
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
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
