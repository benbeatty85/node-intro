var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(
    function(response) {
      
      // Parse as JSON
      
      var position = JSON.parse(response)
      
      // Return object with lat and lng
       var objPosition = {};
       
       objPosition.lat = position.iss_position.latitude;
       objPosition.lng = position.iss_position.longitude;
      
    }
  )
}

function getAddressPosition(address) {

}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}