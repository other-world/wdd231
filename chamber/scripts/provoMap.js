function myMap() {
    let mapProp = {
        center:new google.maps.LatLng(40.2334, -111.6586),
        zoom:5,
    };
    var map = new google.maps.Map(document.querySelector("#googleMap"),mapProp);
} 

