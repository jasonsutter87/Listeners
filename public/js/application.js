var loggedin;
var myLatLng = {lat: 37.784701, lng: -122.397783};
var map;
var marker;
var images = [];
var saturation = 0;
var newSaturation;
var allMarkers;
var allInfoWindows = [];

var myStyles = [
  {
    stylers: [
      { hue: "##0040ff" },
      { saturation: 27 }
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
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      styles: myStyles,
      zoom: 14
    });

    if (loggedin){
      marker = new google.maps.Marker({
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        map: map,
      });     
    }


  allMarkers = [];
  allMarkers.push(marker);

    }
  }
);
}

$(document).ready(function() {
  eventListeners();

});


function eventListeners(){
  addListener();
  removeForm();
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



function removeForm(){
  $('#new-listener-button').on('submit', function(event){
    debugger
    event.preventDefault();
    $.ajax({
      type: "get",
      url: "/locations",
    }).done(function(response){
     $('#form-div').hide();
     $('#new-listener').html(response);
   });
  });
};



function addPins(){
   marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
    });
};







