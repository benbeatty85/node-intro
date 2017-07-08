var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(function(response) {
    var position = JSON.parse(response);
    var issLocation = {}; //empty object for position information
      issLocation.lat = position.iss_position.latitude;
      issLocation.lng = position.iss_position.longitude;
      //console.log(issLocation);
  })
  .catch(function(error) {
    console.log("There was an error with your request");
  })
}

getIssPosition();


function getAddressPosition(address) {
 var apiKey = "AIzaSyCSGYZwMFbCA1VftAGiJzlT-ZIz3pDphag";
 var linkString = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&Key=" + apiKey;
 
 return request(linkString)
 .then(function(response) {
   var googleAddress = JSON.parse(response);
   var addressObj = {};
   addressObj.lat = googleAddress.results[0].geometry.location.lat;
   addressObj.lng = googleAddress.results[0].geometry.location.lng;
   //console.log(addressObj);
   return addressObj;
 })
 .catch(function(error) {
   console.log("There was an error");
 })
 
}

getAddressPosition("665 Quaker Road Welland ON L3C 3H1");

function getCurrentTemperatureAtPosition(position) {
  return request("https://api.darksky.net/forecast/990d09b1cfd3ab9d6820c3c4218e5396/43.0219085,-79.27941419999999") 
  .then(
    function(response) {
      var tempLatLng = JSON.parse(response);
      var currentTemp = tempLatLng["currently"];
      var tempOnly = currentTemp["temperature"];
        //console.log(tempOnly);
        return tempOnly;
    })
    
    .catch(function(error) {
      console.log("We could not find the temperature");
    })

}

getCurrentTemperatureAtPosition();

function getCurrentTemperature(address) {
  
}

function getDistanceFromIss(address) {

}