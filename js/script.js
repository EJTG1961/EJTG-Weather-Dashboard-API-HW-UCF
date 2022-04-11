// global variables
const searchHistory = [];
const waetherApiUrl = 'https://api.openweathermap.org/';
const apiKey = '7e44f47e6bd98b2ddd7c7e253f059ee9'

//Dom Element reference
// search forms, input, today, forecast, history
let searchForm = $(".search-form");
let searchInput = $(".search-box");
let searchHistory = $(".history");
let todayBox
let forecastBox
let searchDisplayBox

let cityName = $("#weather-searchCity");
let currentDate= $(".date");
let weatherPic= $(".temp");
let currentTemp = $(".temp");
let currentWind = $(".wind");
let currentHumidity = $(".humidity");
let currentUV = (".uvIndex");

// Add timezone from day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// Funtion to display search history
function displaySearchHistory() {
  searchDisplayBox.innerHTML = "";
