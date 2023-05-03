



  


//create map
const myMap ={ 
        coordinates:[],
        businesses: [],
	    map: {},
	    markers: {},

        createMap(){
            this.map = L.map('map', {
                center: this.coordinates,
                zoom: 15,
            })
//how to add user's location
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors',
            }).addTo(this.map)
            const marker = L.marker(this.coordinates).addTo(this.map)
            marker.bindPopup("You are here!").openPopup()

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
/*const popup = L.popup()
    .setLatLng()
    .setContent("")
    .openOn(map)*/

//need other locations 
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: ''
    }
  };
  function addMarkerAndPopup(lat, lng, placeDetail) {
    if (currentMarker) currentMarker.remove();
    currentMarker = new mapboxgl.Marker({color: '#3333FF',})
      .setLngLat([lng, lat])
      .setPopup(createPopup(placeDetail))
      .addTo(map);
      currentMarker.togglePopup();} 


   let submitButton = document.getElementById(submit)

   submitButton.addEventListener('click', () => {  
        fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=coffee&ll=41.8781%2C-87.6298&limit=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
        
        fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=hotel&ll=41.8781%2C-87.6298&limit=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err)) 

        fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=restaurant&ll=41.8781%2C-87.6298&limit=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))

        fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=market&ll=41.8781%2C-87.6298&limit=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
        
    }) 
    
    
//need drop down lists (in index.html)

//need select button (in index.html)

