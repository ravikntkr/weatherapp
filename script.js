let data;
let foreCastOutput;

const inputBox = document.getElementById("inputBox");
const headTime = document.getElementById("current-time");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const stateName = document.getElementById("state-name");
const dateTime = document.getElementById("timeDate");
const logoImage = document.getElementById("logoImage");
const humidity = document.getElementById("humidity-val");
const windSpeed = document.getElementById("wind");
const rain = document.getElementById("rain");
const temprature = document.getElementById("current-temp");
const weatherStatus = document.getElementById("weather-condition");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");
const sunRise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

// Today forecast element

const todayTime3am = document.getElementById("time-3am");
const todayTime6am = document.getElementById("time-6am");
const todayTime9am = document.getElementById("time-9am");
const todayTime12pm = document.getElementById("time-12pm");
const todayTime3pm = document.getElementById("time-3pm");
const todayTime6pm = document.getElementById("time-6pm");
const todayTime9pm = document.getElementById("time-9pm");
const todayTime12am = document.getElementById("time-12am");

// Today forecast icon

const todayTime3amicon = document.getElementById("logoImage-3am");
const todayTime6amicon = document.getElementById("logoImage-6am");
const todayTime9amicon = document.getElementById("logoImage-9am");
const todayTime12pmicon = document.getElementById("logoImage-12pm");
const todayTime3pmicon = document.getElementById("logoImage-3pm");
const todayTime6pmicon = document.getElementById("logoImage-6pm");
const todayTime9pmicon = document.getElementById("logoImage-9pm");
const todayTime12amicon = document.getElementById("logoImage-12am");

// Today forecast temp

const todayTime3amtemp = document.getElementById("temp-3am");
const todayTime6amtemp = document.getElementById("temp-6am");
const todayTime9amtemp = document.getElementById("temp-9am");
const todayTime12pmtemp = document.getElementById("temp-12pm");
const todayTime3pmtemp = document.getElementById("temp-3pm");
const todayTime6pmtemp = document.getElementById("temp-6pm");
const todayTime9pmtemp = document.getElementById("temp-9pm");
const todayTime12amtemp = document.getElementById("temp-12am");

// Day 5 elements
// Day 1
const day1date = document.getElementById("date-1");
const day1icon = document.getElementById("day1-icon");
const day1templow = document.getElementById("day1LowTemp");
const day1temphigh = document.getElementById("day1HighTemp");
const day1rain = document.getElementById("day1Rain");

// Day 2
const day2date = document.getElementById("date-2");
const day2icon = document.getElementById("day2-icon");
const day2templow = document.getElementById("day2LowTemp");
const day2temphigh = document.getElementById("day2HighTemp");
const day2rain = document.getElementById("day2Rain");

// Day 3
const day3date = document.getElementById("date-3");
const day3icon = document.getElementById("day3-icon");
const day3templow = document.getElementById("day3LowTemp");
const day3temphigh = document.getElementById("day3HighTemp");
const day3rain = document.getElementById("day3Rain");

// Day 4
const day4date = document.getElementById("date-4");
const day4icon = document.getElementById("day4-icon");
const day4templow = document.getElementById("day4LowTemp");
const day4temphigh = document.getElementById("day4HighTemp");
const day4rain = document.getElementById("day4Rain");

// Day 5
const day5date = document.getElementById("date-5");
const day5icon = document.getElementById("day5-icon");
const day5templow = document.getElementById("day5LowTemp");
const day5temphigh = document.getElementById("day5HighTemp");
const day5rain = document.getElementById("day5Rain");

// document.body.style.backgroundImage =
//   "url('/snow.jpg'),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))";

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5561db968c54476780e172557232502&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  headTime.innerHTML = data.location.localtime;
  cityName.innerHTML = data.location.name;
  countryName.innerText = data.location.country;
  stateName.innerHTML = data.location.region;
  dateTime.innerHTML = data.location.localtime;
  temprature.innerHTML = data.current.temp_c;
  weatherStatus.innerHTML = data.current.condition.text;
  logoImage.src = data.current.condition.icon;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  rain.innerHTML = data.current.cloud;
  logoImage.src = data.current.condition.icon;

  // Fetch forecast data

  const fetchforecast = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=5561db968c54476780e172557232502&q=${city}&days=6`
  );

  const foreCastData = await fetchforecast.json();
  foreCastOutput = foreCastData;
  console.log(foreCastOutput);

  highTemp.innerHTML = foreCastOutput.forecast.forecastday[1].day.maxtemp_c;
  lowTemp.innerHTML = foreCastOutput.forecast.forecastday[1].day.mintemp_c;
  sunRise.innerHTML = foreCastOutput.forecast.forecastday[3].astro.sunrise;
  sunset.innerHTML = foreCastOutput.forecast.forecastday[3].astro.sunset;

  // Forecast displaying
  todayTime3am.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[3].time.slice(10);
  // icon
  todayTime3amicon.src =
    foreCastOutput.forecast.forecastday[4].hour[3].condition.icon;
  // temp
  todayTime3amtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[3].temp_c;
  //////////////
  // 6am
  todayTime6am.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[6].time.slice(10);
  // icon
  todayTime6amicon.src =
    foreCastOutput.forecast.forecastday[4].hour[6].condition.icon;
  // temp
  todayTime6amtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[6].temp_c;
  //////////////
  // 9am
  todayTime9am.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[9].time.slice(10);
  // icon
  todayTime9amicon.src =
    foreCastOutput.forecast.forecastday[4].hour[9].condition.icon;
  // temp
  todayTime9amtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[9].temp_c;
  //////////////
  // 12pm
  todayTime12pm.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[12].time.slice(10);
  // icon
  todayTime12pmicon.src =
    foreCastOutput.forecast.forecastday[4].hour[12].condition.icon;
  // temp
  todayTime12pmtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[12].temp_c;
  //////////////
  // 3pm
  todayTime3pm.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[15].time.slice(10);
  // icon
  todayTime3pmicon.src =
    foreCastOutput.forecast.forecastday[4].hour[15].condition.icon;
  // temp
  todayTime3pmtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[15].temp_c;
  //////////////
  // 6pm
  todayTime6pm.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[18].time.slice(10);
  // icon
  todayTime6pmicon.src =
    foreCastOutput.forecast.forecastday[4].hour[18].condition.icon;
  // temp
  todayTime6pmtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[18].temp_c;
  //////////////
  // 9pm
  todayTime9pm.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[21].time.slice(10);
  // icon
  todayTime9pmicon.src =
    foreCastOutput.forecast.forecastday[4].hour[21].condition.icon;
  // temp
  todayTime9pmtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[21].temp_c;
  //////////////
  // 12am
  todayTime12am.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[0].time.slice(10);
  // icon
  todayTime12amicon.src =
    foreCastOutput.forecast.forecastday[4].hour[0].condition.icon;
  // temp
  todayTime12amtemp.innerHTML =
    foreCastOutput.forecast.forecastday[4].hour[0].temp_c;
  //////////////

  // Day 5 [Day 1]
  day1date.innerHTML = foreCastOutput.forecast.forecastday[1].date.slice(5);
  day1icon.src = foreCastOutput.forecast.forecastday[1].day.condition.icon;
  day1templow.innerHTML = foreCastOutput.forecast.forecastday[1].day.mintemp_c;
  day1temphigh.innerHTML = foreCastOutput.forecast.forecastday[1].day.maxtemp_c;
  day1rain.innerHTML =
    foreCastOutput.forecast.forecastday[1].day.daily_chance_of_rain;

  // Day 5 [Day 2]
  day2date.innerHTML = foreCastOutput.forecast.forecastday[2].date.slice(5);
  day2icon.src = foreCastOutput.forecast.forecastday[2].day.condition.icon;
  day2templow.innerHTML = foreCastOutput.forecast.forecastday[2].day.mintemp_c;
  day2temphigh.innerHTML = foreCastOutput.forecast.forecastday[2].day.maxtemp_c;
  day2rain.innerHTML =
    foreCastOutput.forecast.forecastday[2].day.daily_chance_of_rain;

  // Day 5 [Day 3]
  day3date.innerHTML = foreCastOutput.forecast.forecastday[3].date.slice(5);
  day3icon.src = foreCastOutput.forecast.forecastday[3].day.condition.icon;
  day3templow.innerHTML = foreCastOutput.forecast.forecastday[3].day.mintemp_c;
  day3temphigh.innerHTML = foreCastOutput.forecast.forecastday[3].day.maxtemp_c;
  day3rain.innerHTML =
    foreCastOutput.forecast.forecastday[3].day.daily_chance_of_rain;

  // Day 5 [Day 4]
  day4date.innerHTML = foreCastOutput.forecast.forecastday[4].date.slice(5);
  day4icon.src = foreCastOutput.forecast.forecastday[4].day.condition.icon;
  day4templow.innerHTML = foreCastOutput.forecast.forecastday[4].day.mintemp_c;
  day4temphigh.innerHTML = foreCastOutput.forecast.forecastday[4].day.maxtemp_c;
  day4rain.innerHTML =
    foreCastOutput.forecast.forecastday[4].day.daily_chance_of_rain;

  // Day 5 [Day 5]
  day5date.innerHTML = foreCastOutput.forecast.forecastday[5].date.slice(5);
  day5icon.src = foreCastOutput.forecast.forecastday[5].day.condition.icon;
  day5templow.innerHTML = foreCastOutput.forecast.forecastday[5].day.mintemp_c;
  day5temphigh.innerHTML = foreCastOutput.forecast.forecastday[5].day.maxtemp_c;
  day5rain.innerHTML =
    foreCastOutput.forecast.forecastday[5].day.daily_chance_of_rain;
};
