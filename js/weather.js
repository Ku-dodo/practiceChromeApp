import { config } from "./api-key.js";

const API_KEY = config.apikey;


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            console.log(data.name, data.weather[0].main);
            temp.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find u. No Weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
