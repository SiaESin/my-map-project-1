console.log('hello lovely lady');
//create map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//API: geolocation
// async function getCoords(){
//     pos = await new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
//     return [pos.coords.latitude, pos.coords.longitude]
// }

// console.log(getCoords());                              

//foursquare API. If more consider the order

//how to add user's location

//need other locations 

//need drop down lists

//need select button

