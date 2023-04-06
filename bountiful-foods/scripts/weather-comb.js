
const forecastTemp = document.querySelector('#forecast-temp');
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherdescr');
const humidity = document.querySelector('#humid');
const url =`https://api.openweathermap.org/data/2.5/forecast?lat=33.16&lon=-117.35&appid=80b330444c5687d991609c5a40ea04df&units=imperial`;


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


  function  displayResults(forecastData) {
    currentTemp.innerHTML = `${forecastData.main.temp.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
    
    humidity.innerHTML = `${forecastData.main.humidity.toFixed(0)}`
    const desc = forecastData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    forecastTemp.innerHTML = `${forecastData.main.temp.toFixed(0)}`;
   
    
  }

