
// document.getElementById('btn *').addEventListener('click', () => {

// });

let inputs = document.getElementsByTagName('input');
console.log(inputs)
// for (let input of inputs) {
//   alert(input.checked)
// }


// function showTemp() {
//   if document.getElementById()
//   }
// }

document.getElementById("City").addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    graphData();
  }
})

// DETERMINE LOCATION

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const key = '&key=AIzaSyBKd5I7u1oc_iX8wrBze-LNNmiHFPqdtCI';


let lat = 0
let lng = 0
let address = 0
let place = 0

async function getData() {
  address = await document.getElementById('City').value;
  console.log(address)
  const response = await fetch(`${url}${address}${key}`);
  const locationData = await response.json();
  console.log(locationData)
  lat = locationData.results[0].geometry.location.lat
  lng = locationData.results[0].geometry.location.lng
  place = locationData.results[0].formatted_address
  console.log(place)
};

// Weather DATA Import


let weatherData = []
let weatherDataMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let weatherDataTemps = []

let urlWeather = 0

async function getWeather() {
  // const coordinates = await getData
    urlWeather = `https://api.meteostat.net/v2/point/climate?lat=${lat}&lon=${lng}`
    console.log(urlWeather)
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
  // weatherDataMonths = weatherData.map((months, index) => {
  //   return weatherData[index].month;
  // })
  weatherDataTemps = weatherData.map((months, index) => {
    return weatherData[index].tavg;
  })
};

async function graphData() {
  // let lat = 0
  // let lng = 0
  // let weatherData = []
  const stepOne = await getData()
  const stepTwo = await getWeather()
  console.log(weatherData[0].tavg)
  var ctx = await document.getElementById('myChart').getContext('2d');
  var chart = await new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: weatherDataMonths,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 45)',
        borderColor: 'rgb(255, 99, 132)',
        data: weatherDataTemps
      }]
    },


    // Configuration options go here
    options: {}
  });
}

// graphData();
