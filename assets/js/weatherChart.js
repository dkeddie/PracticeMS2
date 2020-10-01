// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'line',

//   // The data for our dataset
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45]
//     }]
//   },

//   // Configuration options go here
//   options: {}
// });



// DETERMINE LOCATION

async function displayWeather() {
  let coordinates = await getCoordinates();
  console.log(coordinates);
}

displayWeather();

var weather;

var outputLat;
var outputLng;
var coordinates = {};
// var location = "london"
// var location = london;

function getCoordinates() {
  var xhr = new XMLHttpRequest;
  // var location = document.getElementById("location").value;
  urlAPI = "https://maps.googleapis.com/maps/api/geocode/json?address="+"London"+"&key=AIzaSyBKd5I7u1oc_iX8wrBze-LNNmiHFPqdtCI"

  // console.log(location)
  // console.log(urlAPI)

  xhr.open("GET", urlAPI , true);
  xhr.send();

  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText)
      coordinates = data.results[0].geometry.location
      // outputLat = getCoordinates.results[0].geometry.location.lat;
      // outputLat = getCoordinates.results[0].geometry.location.lng;
      // coordinates = data;
      console.log(coordinates);
    };
    // return getCoordinates.results[0].geometry.location;
    // console.log(coordinates);
    return coordinates;
      console.log(coordinates);
  };

  
  // return getCoordinates.results[0].geometry.location;
}

// const output = getCoordinates('London');
getCoordinates();
console.log(coordinates);

// getCoordinates();
// console.log(coordinates);

// function getData(data) {

// }

// var outputLat;
// var outputLng;

// document.getElementById('button').addEventListener('click', loadCoordinates)

// function loadCoordinates() {
//   var xhr = new XMLHttpRequest;
//   var location = document.getElementById("location").value;
//   urlAPI = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyBKd5I7u1oc_iX8wrBze-LNNmiHFPqdtCI"

//   console.log(location)
//   console.log(urlAPI)

//   xhr.open("GET", urlAPI , true);
//   xhr.send();

//   xhr.onload = function () {
//     if (this.status == 200) {
//       var coordinates = JSON.parse(this.responseText);
//       console.log(coordinates.results[0].formatted_address)

//       outputLat = coordinates.results[0].geometry.location.lat;
//       outputLng = coordinates.results[0].geometry.location.lng;
//       // outputLat += '<p>Latitude: ' + coordinates.results[0].geometry.location.lat + '</p>';
//       // outputLng += '<p>Longitude:' + coordinates.results[0].geometry.location.lng + '</p>';

//       document.getElementById('coordinates').innerHTML = outputLat + outputLng;

//     }
//   }
// }

// Weather DATA Import

// console.log(outputLat);
// console.log(outputLng);

// // document.getElementById('button1').addEventListener('click', getStation)

// var station;

// // function loadWeather() {
  
//   function getStation() {
//     if(outputLat) {
//     var xhr = new XMLHttpRequest();
//     urlWeather = "https://api.meteostat.net/v2/stations/nearby?lat=" + outputLat + "&lon=" + outputLng + "&limit=3"

//     xhr.open("GET", urlWeather);
//     xhr.withCredentials = false;
//     xhr.setRequestHeader("x-api-key", "RMs9pME8PJQpNfti54tiw4fJQOquTm71");
//     xhr.send();

//     xhr.onload = function () {
//       if (this.status == 200) {
//         stations = JSON.parse(this.responseText);
//         station = stations.data[0].id;
//       }
//     };
//   };
// }


//   console.log(station);


//   function loadData() {
//     if (station) {
//     var xhr = new XMLHttpRequest();
//     urlStation = "https://api.meteostat.net/v2/stations/climate?station="+station

//     xhr.open("GET", urlStation);
//     xhr.withCredentials = false;
//     xhr.setRequestHeader("x-api-key", "RMs9pME8PJQpNfti54tiw4fJQOquTm71");
//     xhr.send();

//     xhr.onload = function () {
//       if (this.status == 200) {
//         var weather = JSON.parse(this.responseText);
//         console.log(weather)
//       }
//     };
//   };
// }

// console.log(weather)

