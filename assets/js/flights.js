let monthList = [
  {id: '01', name: "Jan"},
  {id: '02', name: "Feb"},
  {id: '11', name: "Nov"},
  {id: '12', name: "Dec"}
];

monthCurrent = document.getElementById('monthCurrent').innerHTML;
console.log(monthCurrent)

let monthNr = monthList.find(({name}) => name === monthCurrent).id;
console.log(monthNr)

let outbound = `2020-${monthNr}`
let inbound = `2020-${monthNr}`
let origin = "London"
let destination = "Paris"

async function getData() {
  const originNameSearch = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${origin}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "79d622f787mshe349c803b0be374p11035ejsn2a0c241e87dd"
    }
  })
  const originNameData = await originNameSearch.json()
  console.log(originNameData)
  const originNameID = originNameData.Places[0].CityId
  console.log(originNameID)

  const destinationNameSearch = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${destination}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "79d622f787mshe349c803b0be374p11035ejsn2a0c241e87dd"
    }
  })
  const destinationNameData = await destinationNameSearch.json()
  console.log(destinationNameData)
  const destinationNameID = destinationNameData.Places[0].CityId
  console.log(destinationNameID)


  const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${originNameID}/${destinationNameID}/${outbound}?inboundpartialdate=${inbound}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "79d622f787mshe349c803b0be374p11035ejsn2a0c241e87dd"
  }
  })
  const data = await response.json()
  console.log(data)
}

getData();
