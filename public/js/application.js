function initMap() {
      var myLatLng = {lat: 37.784701, lng: -122.397783};

      var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
          center: myLatLng,
          zoom: 14
      });

    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
    }













$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
