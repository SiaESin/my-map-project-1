console.log('hello lovely lady');
//create map
const myMap = L.map('map', {  //.setView([51.505, -0.09], 13)
    center: [48.868672, 2.342130],
    zoom: 12,
})

//API: geolocation
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

console.log(getCoords());                              

//foursquare API. If more consider the order

//how to add user's location

//need other locations 

//need drop down lists

//need select button

