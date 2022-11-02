//Getting users location
function getUserLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            //console.log(position.coords)
            let{longitude,latitude}= position.coords
            getData(latitude,longitude)
        })
    }
}
async function getData(lat,lon){
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9625589291257481d2784dbefdcaa01&units=metric`);
    let response = await request.json()
    console.log(response)

//outpiting Data
let name = response.name;
let country = response.sys.country;
let temp = response.main.temp +"&deg"

let stateText = document.querySelector(".state").innerHTML = name
let countryText = document.querySelector(".country").innerHTML = country
let temperatureText =document.querySelector(".temp").innerHTML = temp
}
getUserLocation();