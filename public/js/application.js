
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

    function addInfoWindow(content) {
      return new google.maps.InfoWindow({
        content: content
      });
    }

    var infowindow = addInfoWindow(contentString);
    var infowindow1 = addInfoWindow(contentString1);


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
  eventListeners();

});


function eventListeners(){
  addListener();
  removeForm();

}


function removeForm(){
   $('#new-listener-button').on('submit', function(event){
    debugger;
    event.preventDefault();
     // $.ajax({
     //    type: "post",
     //    url: "/locations",
     //  }).done(function(response){
     //    console.log(response)
     //  }

   });
}



function addListener(){
  $('#new-listener').on('click', function(event){
    event.preventDefault();
    // debugger;
     $.ajax({
        type: "get",
        url: "/locations/new",
      }).done(function(response){
       $('#new-listener').hide();
       $('#form-div').html(response);
          });

  });
};




















// $(document).ready(function() {
//   $('#post_form').on('submit', function(event){
//     event.preventDefault();
//     var data =  $( this ).serialize();
//     $.ajax({
//         type: "post",
//         url: "/posts",
//         data: data
//       }).done(function(response){
//         $( '#post_form' ).each(function(){
//               this.reset();
//           });
//         $("#posts").prepend(response)
//       });
//   })


//   $('.post').on('submit', function(event){
//     var $form = $(this);
//     var $path = $($form).find('span.like_count');
//     var articleUrl = ("#post_like").attr('action');


//     event.preventDefault();
//     $.ajax({
//     url: $path,
//     method: "put",
//     dataType: 'json',
//   })
//     .done(function(response){

//     $path.html(1);

//      })



//   })

// })








