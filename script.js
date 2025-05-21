async function getWeather() {
    try {
        const cityName = document.getElementById("search-input").value;
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`);
        const data = await response.json();
        
        if(cityName) document.getElementById("h1-location").innerText = cityName.charAt(0).toUpperCase()+cityName.slice(1);
        else if(!cityName) document.getElementById("h1-location").innerText = "Bangalore";
        
        document.getElementById("h2-current-temp").innerText = data.main.temp + "°C";
        document.getElementById("p-current-temp").innerText = data.weather[0].description;
        document.getElementById("p-feels-like").innerText = data.main.feels_like + "°C";
        document.getElementById("p-humidity").innerText = data.main.humidity + "%";
        document.getElementById("p-wind-speed").innerText = data.wind.speed + " m/s";
        document.getElementById("p-cloud-cover").innerText = data.clouds.all + "%";

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        document.getElementById("p-sunrise").innerText = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        document.getElementById("p-sunset").innerText = sunsetTime.toLocaleTimeString();


    } catch(err) {
        document.getElementById("h1-location").innerText = "City Not Found!";
        document.getElementById("h1-location").style.color = "darkslateblue";

        document.getElementById("h2-current-temp").innerText = "--";
        document.getElementById("p-current-temp").innerText = "No data available";
        document.getElementById("p-feels-like").innerText = "--";
        document.getElementById("p-humidity").innerText = "--";
        document.getElementById("p-wind-speed").innerText = "--";
        document.getElementById("p-cloud-cover").innerText = "--";

        document.getElementById("p-sunrise").innerText = "--";
        document.getElementById("p-sunset").innerText = "--";
    }
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", getWeather)