import * as elements from "/elements.js";
let cels = true;
let location = "Las Vegas";


window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = "https://cors-anywhere.herokuapp.com/";

            const api = `https://api.weatherapi.com/v1/current.json?key=4b35052eaeae47e3a5e112630210503&q=${location}&aqi=no`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    elements.temperatureValue.innerHTML = data.current.temp_c;
                    elements.temperatureUnit.innerHTML = "°C";
                    elements.locationTitle.innerHTML = data.location.name;
                    elements.description.innerHTML = data.current.condition.text;
                    elements.weatherIcon.src = data.current.condition.icon;

                    elements.tempCont.addEventListener("click", () => {
                        if (cels) {
                            elements.temperatureUnit.innerHTML = "°C";
                            elements.temperatureValue.innerHTML = data.current.temp_c;
                            cels = false;
                    
                        }
                        else if (!cels){
                            elements.temperatureUnit.innerHTML = "F";
                            elements.temperatureValue.innerHTML = data.current.temp_f;
                            cels = true;
                        }
                    })
                })
            
        })
    }
});

