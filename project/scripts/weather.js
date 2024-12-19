const locationFile = "./data/mountainLocations.json";
const currentTemp = document.querySelector('#weatherPage');

openWeatherLocations("All");


/* Add listeners for the radio buttons
   There's got to be a better way, but
   this works for now.                 */
document.addEventListener('click', function (event) {
    if (event.target.value == 'All') {
        openWeatherLocations("All");
    }
    else if (event.target.value == 'Summit') {
        openWeatherLocations("Summit");
    } 
    else if (event.target.value == 'StewartFalls') {
        openWeatherLocations("StewartFalls");
    } 
    else if (event.target.value == 'Timpooneke') {
        openWeatherLocations("Timpooneke");
    } 
    else if (event.target.value == 'AspenGrove'){
        openWeatherLocations("AspenGrove");
    }
}, false);

async function openWeatherLocations(specifier) {
    try {
      const response = await fetch(locationFile);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const locations = await response.json();

      // Build Cards for each location
      weatherCardBuilder(locations.timpLocations, specifier);
    }
  
    catch (error) {
      console.error(error.message);
    }
  
}

function weatherCardBuilder(timpArray, limiter){
    currentTemp.innerHTML="";
    timpArray.forEach(element => {
        if (limiter == "All"){
            getForecast(element.apiURL, element.location);
        }
        else if (element.simplified == limiter) {
            getForecast(element.apiURL, limiter);
        }
        });
}

async function getForecast(apiURL, location) {
    try {
    const response = await fetch(apiURL);
    if (response.ok) {
        const weatherData = await response.json();
        condensedLocation = location.replace(/\s/g, "");

        //Build a weather Card
        const newCard = document.createElement("section");
        newCard.setAttribute("class", "weathercard");
        newCard.setAttribute("id", `${condensedLocation}Weather`);
            const thisLocation = document.createElement("h3");
            thisLocation.innerHTML = `${location}`;
            newCard.appendChild(thisLocation); 

            chill = calulateWindChill(weatherData.properties.periods[0].temperature, weatherData.properties.periods[0].windSpeed);


            const icon = document.createElement("img");
            icon.setAttribute("src", `${weatherData.properties.periods[0].icon}`);
            icon.setAttribute("alt", `Weather Icon`);
            icon.setAttribute("width", "86");
            icon.setAttribute("height", "86");
            icon.setAttribute("loading", "lazy");

            newCard.appendChild(icon);

            const temperature = document.createElement("p");
            temperature.innerHTML = `<b>Current Temp:</b> ${weatherData.properties.periods[0].temperature}°F`;
            newCard.appendChild(temperature);

            const humidity = document.createElement("p");
            humidity.innerHTML = `<b>Humidity:</b> ${weatherData.properties.periods[0].relativeHumidity}°F`;
            newCard.appendChild(humidity);

            const windspeed = document.createElement("p");
            windspeed.innerHTML = `<b>Windspeed:</b> ${weatherData.properties.periods[0].windSpeed} ${weatherData.properties.periods[0].windDirection}`;
            newCard.appendChild(windspeed);


            const windchill = document.createElement("p");
            windchill.innerHTML = `<b>WindChill:</b> ${chill}°F`;
            newCard.appendChild(windchill);

        currentTemp.appendChild(newCard);

        }
        else {
            throw new Error(`Response status: ${response.status}`);
        }
    }

    catch (error) {
        console.error(error.message);
    }
}

function calulateWindChill(temperature, windspeed){
    const temp = Number(temperature);
    const windArray = (windspeed.split(" ")); 
    const chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (Number(windArray[0])**0.16)) + (0.4275 * temp * (Number(windArray[0])**0.16)));

    // if the array is longer, there's a range of windspeed, we'll take colder temp and return that
    if (windArray.length == 4){
        const chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (Number(windArray[2])**0.16)) + (0.4275 * temp * (Number(windArray[2])**0.16)));
    }
    
    return (chill);
}