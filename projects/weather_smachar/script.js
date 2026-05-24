const API_KEY = "d29637e51d4be84bebc62b10d51d071a";

async function getWeather() {

    const cityname =
    document.getElementById("cityName").value.trim();

    const { lattitude, longitude } =
    await getgeolocation(cityname);

    console.log(lattitude, longitude);


    const WEATHER_API = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    const weatherData = await WEATHER_API.json();

    console.log(weatherData);

  
    document.getElementById("temp").innerText =
    `temp: ${weatherData.main.temp} °C`;

}

async function getgeolocation(city){

const GEO_LOC_API = await fetch(
`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
);

const data = await GEO_LOC_API.json();

console.log(data);

const lattitude = data[0].lat;
const longitude = data[0].lon;

return { lattitude, longitude };

}