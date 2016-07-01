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
  $('body').on('submit','#new-listener-form', function(event){
    event.preventDefault();
    var newPostData = $(this).serialize();
    console.log(newPostData);
    $.ajax({
      type: "post",
      url: "/locations",
      data: newPostData
    }).done(function(response){
    marker = new google.maps.Marker({
        position: response,
        animation: google.maps.Animation.DROP,
        map: map,
      });
    $('#new-listener-form').hide();
    $('#new-listener').show();
    // $('#form-div-button').html(response);
    allMarkers.push(marker);

   });
  });
};





