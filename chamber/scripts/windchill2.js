// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherdescr');
const windSpeed = document.querySelector('#speed');
const humidity = document.querySelector('#humid');
const windChill = document.querySelector('#chill');
const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.83&lon=-87.38&appid=80b330444c5687d991609c5a40ea04df&units=imperial`;

//how do i get the windchill? I need to get the speed and temp into a function somehow
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function  displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    chilly();
    
  }

  //this seems to be doing the trick :)
  function chilly() {
   let tempr = parseInt(currentTemp.textContent);
   let speedr = parseInt(windSpeed.textContent);
   if (tempr > 50 || speedr < 3) {
   document.getElementById("chill").innerHTML = "N/A";
  }

  else if (tempr <= 50 || speedr > 3) {

   let windChill = 35.74 + 0.6215 * tempr - 35.75 * Math.pow(speedr, 0.16) + 0.4275 * tempr * Math.pow(speedr, 0.16);
   windChill = (windChill > tempr) ? tempr : windChill;
   document.getElementById("chill").innerHTML = Math.round(windChill);
  }
}
