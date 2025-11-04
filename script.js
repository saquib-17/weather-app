const apiKey = "8064ec8bf77d330877ae0eff997a0b0d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wheather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      wheatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wheatherIcon.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      wheatherIcon.src = "assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      wheatherIcon.src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wheatherIcon.src = "assets/mist.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  if (searchBox.value === "") {
    alert("PLease enter city name");
    return;
  }
  //   wheatherShow.style.display = "block";
  document.querySelector(".wheather").classList.add("active");
  checkWheather(searchBox.value);
});
