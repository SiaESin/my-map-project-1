console.log('hello lovely lady');
//create map


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

