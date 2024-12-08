// CREATE REQUIRED VARIABLES FOR THE WEATHER URL
const myKey = "2985c0215e1e73966f52474f9cc1361f";
const myLat = "40.23333058402793";
const myLong = "-111.6669845143336";

// weatherUrl that includes the API request for my Provo-home data
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

apiFetch(weatherUrl);

// First:  await fetch(weatherUrl);      for the web page to responsd
// Second: await response.json(); for the web page to send us the requested data
async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);    // testing only
            if (url == weatherUrl) {
                displayResults(data);
            } else if (url == forecastUrl) {
                console.log("Going to display Forecast");
                console.log(`list[0].dt VALUE IS: ${data.list[0].dt}`);
                displayForecast(data);
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

