// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
//document.addEventListener("deviceready", onDeviceReady, false);

//declare public variables
var latitude;
var longitude;
var latLng;
var map;
//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {

    latitude=position.coords.latitude;
    longitude=position.coords.longitude;   

    latLng =new google.maps.LatLng(latitude, longitude);

    var maping = {
        center: latLng,
        zoom:10,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), maping);
}

function pinLocation(){
    var marker = new google.maps.Marker({
        position:latLng,
        map:map,
        title:"Job's Location"

    });
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert("please turn your location on");
}
