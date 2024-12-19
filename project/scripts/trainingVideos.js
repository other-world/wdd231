const locationFile = "./data/training.json";
const tertVideos = document.querySelector('#tertVideos');

const selectTag = document.querySelector('#tagDropdown');
const videoGrid = document.querySelector('#videoGrid');

let tagList = [];

openTrainingJSON("All"); //openTrainingGrid

const dropdown = document.getElementById('tagDropdown');

/*dropdown.addEventListener('change', function() {
  // Get the selected value
  const selectedValue = this.value;

  // Do something with the selected value
  console.log('Selected value:', selectedValue);
});*/

async function openTrainingJSON(specifier) {
    try {
      const response = await fetch(locationFile);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const trainingList = await response.json();

      // Build a list of tags that we will use for possible filters
      trainingList.trainingvideos.forEach(element => {
        element.tags.forEach(tag => {
            if (tagList.includes(tag) == false){
                tagList.push(tag);
            }
        });
        
      });
      buildTagDropdown(tagList);

      // Build Cards for each video
      videoCardBuilder(trainingList.trainingvideos, specifier);
    }
  
    catch (error) {
      console.error(error.message);
    }
  
}

function buildTagDropdown(tags) {

        tags.forEach(tag => {
            //console.log(tag);
            const tagOption = document.createElement("option");
            tagOption.setAttribute("value", `${tag}`);
            tagOption.textContent = `${tag}`;
            selectTag.appendChild(tagOption);
        });
    
        filterDiv.appendChild(selectTag);
}

function videoCardBuilder(videoArray, limiter){
    console.log("Entering card builder..")
    videoGrid.innerHTML="";
    videoArray.forEach(element => {
        console.log(element.title);

        const movieDiv = document.createElement("div");
        movieDiv.setAttribute("class", "movieDiv");
            const thumbnail = document.createElement("img");
            if (element.thumbnail == ""){
                thumbnail.setAttribute("src", "images/movieIcon.png");
            }
            else {
                thumbnail.setAttribute("src", element.thumbnail);
            }
            thumbnail.setAttribute("alt", element.title);
            thumbnail.setAttribute("width", "50");
            thumbnail.setAttribute("height", "50");
            thumbnail.setAttribute("loading", "lazy");
            movieDiv.appendChild(thumbnail);

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = element.title;
            movieDiv.appendChild(movieTitle);

            const movieLink = document.createElement("a");
            movieLink.setAttribute("href", element.path);
            movieLink.setAttribute("target", "_blank");
            movieLink.setAttribute("class", "inlineLink");
            movieLink.textContent = "View";
            movieDiv.appendChild(movieLink);

        videoGrid.appendChild(movieDiv);

        if (limiter == "All"){
            //getForecast(videoArray, element.location);
        }
        else if (element.simplified == limiter) {
            //getForecast(element.apiURL, limiter);
        }
        });
}

/*async function getForecast(apiURL, location) {
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
}*/