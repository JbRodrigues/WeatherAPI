const apiKey = 'ac4095629fae467398e185840232103';

const form = document.getElementById("myForm");
let inputedCity = document.getElementById("inputCity");
let displayCity = document.getElementById("formCity");
let displayRegion = document.getElementById("formRegion");
let displayTemp = document.getElementById("formTemp");
let displayText = document.getElementById("formText");
let displayIcon = document.getElementById("formIcon");


function textSubmit() {
    // Add an event listener to the form to handle form submission
    form.addEventListener("submit", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        let city = inputedCity.value.toUpperCase();
        console.log(city)
        displayCity.innerHTML = city;
    });
    return city
}

function fetchFunction(city) {

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {

            let cityName = data.location.name
            let regionName = data.location.region
            let currentTemp = data.current.temp_c
            let currentCondition = data.current.condition.text
            let currentConditionLogo = data.current.condition.icon
            displayCity.innerHTML = cityName;
            displayRegion.innerHTML = regionName;
            displayTemp.innerHTML = currentTemp + " &degC";
            displayIcon.setAttribute("src", currentConditionLogo)
            displayText.innerHTML = currentCondition;

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

textSubmit(fetchFunction())



