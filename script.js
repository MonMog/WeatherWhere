const searchBtn = document.getElementById("search-btn");
const locationInput = document.getElementById("location");
const weatherData = document.getElementById("weather-data");

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3f29c70f59d85475026fff1438772527&units=metric`;
  weatherData.innerHTML = `<p>Loading...</p>`;
  try {
    const response = await fetch(weatherAPI);
    const data = await response.json();
    const main = data.main;
    const weather = data.weather[0];
  
    weatherData.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${main.temp}&#8451;</p>
      <p>Feels like: ${main.feels_like}&#8451;</p>
      <p>Weather condition: ${weather.main} - ${weather.description}</p>
      <p>Humidity: ${main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    console.error(err);
    weatherData.innerHTML = `<p>An error occurred, please try again later.</p>`;
  }
});


