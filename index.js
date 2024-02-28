function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-form");
  searchCity(searchInput.value);
}
let searchedData = document.querySelector("#search-form");
searchedData.addEventListener("submit", handleSearchInput);
