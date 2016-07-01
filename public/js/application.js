var loggedin;
var myLatLng = {lat: 37.784701, lng: -122.397783};
var map;
var marker;
var images = [];
var saturation = 0;
var newSaturation;
var allMarkers = [];
var allInfoWindows = [];


var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];






// function initMap() {

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: myLatLng,
//     zoom: 10,
//     styles: styleArray
//   });

//   marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Drag Me!',
//     draggable: true,
//     icon: '/Markers/brown_MarkerD.png'
//   });
//   google.maps.event.addListener(marker, 'dragend', function (event) {
//     var lat = event.latLng.lat();
//     var long = event.latLng.lng();
//     var latlng = {lat: lat, lng: long};
//     findQuakes(latlng);
//   });

//   infoWindow = new google.maps.InfoWindow(), marker;
//   infoWindow.setContent('<strong>Drag and Drop</strong> to find nearby earthquakes (within ~100miles) in the past 30 days!')
//   marker.addListener('click', function() {
//     infoWindow.open(map, marker);
//   });
//   infoWindow.open(map, marker);

//   allMarkers = [];
//   allMarkers.push(marker);


// }







var myStyles = [
  {
    stylers: [
      { hue: "##0040ff" },
      { saturation: -50 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

function initMap() {
  $.ajax({
   url: "/logged_in",
   success: function(response){
    loggedin = response;
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: myLatLng,
      styles: myStyles,
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

   
    function addInfoWindow(content) {
      return new google.maps.InfoWindow({
        content: content
      });
    }

    var infowindow = addInfoWindow(contentString);
   

    var marker;
    if (loggedin){
      marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

     
    }



    
  }});
}












$(document).ready(function() {
  eventListeners();

});


function eventListeners(){
  addListener();
}



function addListener(){
  $('#new-listener').on('click', function(event){
    event.preventDefault();
    $.ajax({
      type: "get",
      url: "/locations/new",
    }).done(function(response){
     $('#new-listener').hide();
     $('#form-div').html(response);
   });
  });
};










