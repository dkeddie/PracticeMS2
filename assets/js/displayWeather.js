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



// var weather;

// var outputLat;
// var outputLng;

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const address = 'los angeles';
const key = '&key=AIzaSyBKd5I7u1oc_iX8wrBze-LNNmiHFPqdtCI';

// let lat = 0
// let lng = 0

let lat = 0
let lng = 0

async function getData() {
  const response = await fetch(`${url}${address}${key}`);
  const locationData = await response.json();
  console.log(locationData)
  lat = locationData.results[0].geometry.location.lat
  lng = locationData.results[0].geometry.location.lng
  };

getData();

setTimeout(() => {
  console.log(lat)
}, 4000);


// var hello = locationData.results[0].geometry.location
// .then(console.log(hello))

// coordinates = locationData.results[0].geometry.location;

// console.log(coordinates);


// function getCoordinates() {
//   var xhr = new XMLHttpRequest;
//   urlAPI = `${url}${address}${key}`

//   xhr.open("GET", urlAPI, true);
//   xhr.send();

//   xhr.onload = function () {
//     if (this.status == 200) {
//       var data = JSON.parse(this.responseText)
//       coordinates = data.results[0].geometry.location
//     };
//   };
// }

// getCoordinates();

// setTimeout(() => {
//   console.log(coordinates);
// }, 3000);


// Weather DATA Import

// var station;

urlWeather = `https://api.meteostat.net/v2/point/climate?lat=34.0522342&lon=-118.2436849`
console.log(urlWeather)

let weatherData = []

async function getStation() {
  // const coordinates = await getData
  const response = await fetch(urlWeather, {
    method: 'GET',
    credentials: 'omit',
    headers: {
      // 'Content-Type': 'application/json',
      // 'x-api-key': 'RMs9pME8PJQpNfti54tiw4fJQOquTm71',
    },
  })
  const data1 = await response.json()
  console.log(data1)
  weatherData = data1.data
  console.log(weatherData)
};

getStation();

setTimeout(() => {
  console.log(weatherData)
}, 3000);

// function getStation() {
//   var xhr = new XMLHttpRequest();

//   xhr.open("GET", urlWeather);
//   xhr.withCredentials = false;
//   xhr.setRequestHeader("x-api-key", "RMs9pME8PJQpNfti54tiw4fJQOquTm71");
//   xhr.send();

//   xhr.onload = function () {
//     if (this.status == 200) {
//       var stations = JSON.parse(this.responseText);
//       station = stations.data[0].name;
//       console.log(stations)
//     };
//   };
// }

// setTimeout(() => {
//   getStation()
// }, 6000)

// setTimeout(() => {
//   console.log(station);
// }, 8000)

// var weatherData = {}

// function loadData() {
//   var xhr = new XMLHttpRequest();
//   urlStation = `https://api.meteostat.net/v2/point/climate?lat=${coordinates.lat}&lon=${coordinates.lng}`

//   xhr.open("GET", urlStation);
//   xhr.withCredentials = false;
//   xhr.setRequestHeader("x-api-key", "RMs9pME8PJQpNfti54tiw4fJQOquTm71");
//   xhr.send();

//   xhr.onload = function () {
//     if (this.status == 200) {
//       var source = JSON.parse(this.responseText);
//       weatherData = source;
//       console.log(weatherData)
//     }
//   };
// }

// setTimeout(() => {
//   loadData()
// }, 10000)

// setTimeout(() => {
//   console.log(weatherData);
// }, 12000)

// async function displayWeather() {
//   const stepOne = await getCoordinates();
//   const stepThree = await getStation();
//   const stepFour = await loadData();
//   console.log(weatherData);
// }

// displayWeather();

