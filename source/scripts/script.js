const apiKey = 'ac4095629fae467398e185840232103';

const form = document.getElementById("myForm");
let inputedCity = document.getElementById("inputCity");
let displayCity = document.getElementById("formCity");
let displayCountry = document.getElementById("formCountry");
let displayTemp = document.getElementById("formTemp");
let displayText = document.getElementById("formText");
let displayIcon = document.getElementById("formIcon");


// Add an event listener to the form to handle form submission
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    let city = inputedCity.value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let regionName = data.location.region;
            let cityName = data.location.name + " - " + regionName;
            let countryName = data.location.country;
            let currentTemp = data.current.temp_c;
            let currentCondition = data.current.condition.text;
            let currentConditionLogo = data.current.condition.icon;

            let body = document.querySelector('body');
            switch (currentCondition) {
                case "Sunny":
                    body.className = "sunny"

                    break;

                case "Partly cloudy":
                    body.className = "partlyCloudly"
                    break;

                default:
                    body.className = "default"
                    break;
            }


            displayCity.innerHTML = cityName;
            displayTemp.innerHTML = currentTemp + " &degC";
            displayIcon.setAttribute("src", currentConditionLogo);
            displayText.innerHTML = currentCondition;
            displayCountry.innerHTML = countryName;

        })
        .catch(error => {
            console.error('Error:', error);
            let cityName = "City not found ;(";
            let countryName = "";
            let currentTemp = "";
            let currentCondition = "";
            displayTemp.innerHTML = currentTemp;
            displayText.innerHTML = currentCondition;
            displayCountry.innerHTML = countryName;
            displayCity.innerHTML = cityName;
            displayIcon.setAttribute("src", 'source/assets/not-found.png');
        });
});
