/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");

if (city === null || city === "") {
  alert("You entered nothing");
} else if (city.toLowerCase() in weather) {
  let findCity = city.toLowerCase();
  let celsiusTemp = weather[findCity].temp;
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let humidity = weather[findCity].humidity;
  let cityCapitalize = findCity.charAt(0).toUpperCase() + findCity.slice(1);  
  alert(
    `It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${cityCapitalize} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}*/

function firstLetterCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function showDate() {
  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let date = document.querySelector(".date");
  let data = new Date();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  date.innerHTML = `${data.getDate()}th`;
  month.innerHTML = months[data.getMonth()];
  day.innerHTML = days[data.getDay()];
}

showDate();

function showTemp(response) {
  let nameCity = document.querySelector(".name-weather");
  let temperature = document.querySelector("#temperature");
  nameCity.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(response.data.main.temp);
}

function getApi(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f1bb6d8310b835cbba9945c33c7dcf54`;
  axios.get(apiUrl).then(showTemp);
}

function getCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input").value;
  getApi(inputCity);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", getCity);

function showCelsius() {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = ((temperature.textContent - 32) * 5) / 9;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

function showFahrenheit() {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = (temperature.textContent * 9) / 5 + 32;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);
