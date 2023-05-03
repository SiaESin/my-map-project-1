



  


//create map
const myMap ={ 
        coordinates:[],
        businesses: [],
	    map: {},
	    markers: {},

        createMap(){
            this.map = L.map('map', {
                center: this.coordinates,
                zoom: 16,
            })
//how to add user's location
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors',
            }).addTo(this.map)
            const marker = L.marker(this.coordinates).addTo(this.map)
            marker.bindPopup("You are here! Yes, we see you... haha").openPopup()

        }
}

//API: geolocation
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
console.log(getCoords());
//foursquare API. If more consider the order

//eventhandlers 
window.onload = async () => {
    const coords = await getCoords()
    console.log(coords)
    myMap.coordinates = coords
    myMap.createMap()
}

//need other locations 

//need drop down lists

//need select button

