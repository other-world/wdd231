const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const lat = "40.23394701948456";
const lon = "-111.65846362075166";
const API_key = "2985c0215e1e73966f52474f9cc1361f";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
let iconURL = "https://openweathermap.org/img/w/";

//console.log(url);

getWeather(url);

async function getWeather(weatherURL) {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData);

            temperature = weatherData.main.temp + "°F";
            description = weatherData.weather[0].description;
            icon = iconURL + weatherData.weather[0].icon + ".png";

            console.log(icon);

            currentTemp.innerHTML = temperature;

            weatherIcon.setAttribute("src", icon);
            weatherIcon.setAttribute("alt", description);
            caption.innerHTML = description;


        }
        else {
            throw new Error(`Response status: ${response.status}`);
        }
    }

    catch (error) {
        console.error(error.message);
    }

}