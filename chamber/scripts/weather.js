const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const lat = "40.23394701948456";
const lon = "-111.65846362075166";
const API_key = "2985c0215e1e73966f52474f9cc1361f";

const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
let iconURL = "https://openweathermap.org/img/wn/";


getWeather(weather);
getForecast(forecast);

function convertToWeekday(dayInNumberFormat){
    switch (dayInNumberFormat){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            throw new Error(`Input did not match any excpected values for day conversion: ${dayInNumberFormat}`);
    }
}

async function getWeather(weatherURL) {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const weatherData = await response.json();
            //console.log(weatherData);

            temperature = ` ${weatherData.main.temp} °F`;
            description = weatherData.weather[0].description;
            icon = iconURL + weatherData.weather[0].icon + "@2x.png";

            //console.log(icon);

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

async function getForecast(forecastURL) {
    const now = new Date();
    let anotherNow = new Date().toDateString();
    let today = now.getDay();
    console.log(now);
    console.log(anotherNow);
    console.log(today);
    
    try {
        const dayName = convertToWeekday(today);
        console.log(dayName);
    }
    catch (e){
        console.error(e);
    }



    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData);

            let dayOneHigh = 0;
            let dayOneLow = 500;
            let dayTwoHigh = 0;
            let dayTwoLow = 500;
            let dayThreeHigh = 0;
            let dayThreeLow = 500;

            for (let i=0; i < weatherData.list.length; i++) {
                let thisDate = weatherData.list[i].dt_txt;
                //console.log(thisDate);


            }
            /*
            weatherData.list.forEach(element => {
                let thisDate = weatherData.list[arrayCounter].dt_txt;
                console.log(thisDate);
                arrayCounter++;
            });*/


        }
        else {
            throw new Error(`Response status: ${response.status}`);
        }
    }

    catch (error) {
        console.error(error.message);
    }
}