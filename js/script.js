
const apiKey= "7e44f47e6bd98b2ddd7c7e253f059ee9";

// Search button

let searchForm = $(".search-form");
// User search input

let searchInput = $(".search-box");
// User search history

let searchHistory = $(".history");
let todayBox
let forecastBox
let searchDisplayBox
// Input name for the valued results

let cityName = $("#weather-searchCity");

let currentDate= $(".date");

let weatherPic= $(".temp");

let currentTemp = $(".temp");

let currentWind = $(".wind");

let currentHumidity = $(".humidity");

// Add timezone from day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
    searchDisplayBox.innerHTML = "";

// Getting Items from storage

if (JSON.parse(localStorage.getItem("searchHistory"))=== null) {
    console.log("searchHistory not found")
} else {
    console.log("searchHistory saved in localStorage");
    rendersearchHistory();
}

searchForm.on("click", function(e){
    e.preventDefault();
    if (searchInput.val()==="") {
        alert("Please enter a city");
        return;
    }
    console.log("click")
    getWeather(searchInput.val());
});

$(document).on("click", ".history", function(){
    console.log("item from history")
    let historyElement = $(history);
    getWeather(historyElement.text());
})

// Adding info to span for display
function rendersearchHistory(cityName) {
    searchHistory.empty();
    let historyArray = JSON.parse(localStorage.getItem(".history"));
    for (let i = 0; i < historyArray.length; i ++) {
      let span = document.getElementById("span"); 

      let a = document.createElement('a');
              a.href = "http://domain.com";
              span.appendChild(a);
    }
}
function weatherData(cityName, cityTemp, cityHumidity, cityWindSpeed, cityWeatherIcon, uvVal) {
    currentDate.text(`(${today})`);
    currentTemp.text(`Temperature: ${cityTemp} °F`);
    currentWind.text(`Wind Speed: ${cityWindSpeed} MPH`);
    currentHumidity.text(`Humidity: ${cityHumidity}%`);
    currentUV.text(`UV Index: ${uvVal}`);
    weatherPic.att("src", cityWeatherIcon);
}


function getWeather(searchInput) {
    const apiKey= "7e44f47e6bd98b2ddd7c7e253f059ee9";
    
    let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=7e44f47e6bd98b2ddd7c7e253f059ee9`;
    
    let latlon = "https://api.openweathermap.org/data/2.5/weather?q=" +
                searchInput +
                "&units=imperial&appid=7e44f47e6bd98b2ddd7c7e253f059ee9";
    
        console.log(latlon);
        
        fetch(latlon)
                .then(response => response.json())
                .then(data => console.log(data))
                .then(function(weatherData){
                    let cityObj= {
                         cityName: weatherData.main.name,
                         cityTemp: weatherData.main.temp,
                         cityWindSpeed: weatherData.wind.speed,
                         cityHumidity: weatherData.main.humidity,
                         cityUVIndex: weatherData.coord,
                         cityWeatherIcon: weatherData.weather[0].icon
                    }
                })
            }
            

          }
