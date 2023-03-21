
const apiKey = 'ac4095629fae467398e185840232103';

// Get a reference to the form and its input elements
const form = document.getElementById("myForm");
let inputedCity = document.getElementById("inputCity");
let formCity = document.getElementById("formCity");
let formRegion = document.getElementById("formRegion");
let city = inputedCity.value
// Add an event listener to the form to handle form submission
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    formCity.innerHTML = city;
});

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        let cityName = data.location.name
        let regionName = data.location.region
        let currentTemp = data.current.temp_c
        let currentCondition = data.current.condition.text
        let currentConditionLogo = data.current.condition.icon
        formRegion.innerHTML = regionName;
    })
    .catch(error => {
        console.error('Error:', error);
    });
