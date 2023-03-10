const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherdescr');
const windSpeed = document.querySelector('#speed');
const windChill = document.querySelector('#chill');
const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.83&lon=-87.38&appid=80b330444c5687d991609c5a40ea04df&units=imperial`;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
   
  

 

  
  }

 