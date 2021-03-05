//import {locationTitle, weatherIcon, temperatureValue, temperatureUnit, description } from "/elements.js";
import * as elements from "/elements.js";

console.log(elements.locationTitle);
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let berlin = "Berlin";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = "https://cors-anywhere.herokuapp.com/";

            const api = `https://api.weatherapi.com/v1/current.json?key=4b35052eaeae47e3a5e112630210503&q=${lat},${long}&aqi=no`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
            
        })
    }
});