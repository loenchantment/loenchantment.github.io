const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weatherdescr');
const humidity = document.querySelector('#humid');
const url =`https://api.openweathermap.org/data/2.5/weather?lat=33.16&lon=-117.35&appid=95559c3fa41634d94f7b019a83c593f6&units=imperial`;

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
    
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
   
    
  }

 
  

  apiFetch2 = function () {
    var url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=33.16&lon=-117.35&appid=95559c3fa41634d94f7b019a83c593f6&units=imperial&exclude=current,hourly,minutely,alerts`;
    var forecast = document.querySelector('.forecast3');
    fetch(url2)
    .then(function (response) {
        if (200 !== response.status) {
            console.log(
                "Looks like trouble has happened. Status Code: " + response.status
            );
            return;

        }

        forecast[0].classList.add('loaded');

        response.json().then(function (data)  {
            var forDay = "";
            data.daily.forEach((value, index) => {
                if (index > 0 ) {
                    var nameOfDay = new Date(value.dt * 1000).toLocaleDateString("en", {
                        weekday: "long",

                    });
                    var icon = value.weather[0].icon;
                    var temp = value.temp.day.toFixed(0);
                    forDay = `<div class="dayOfForecast"
                                <p>${nameOfDay}</p>
                                <p><span class="forecast-day--temp">${temp}<sup>°F<?sup></div>
                                <p><span class="ico-${icon} "  title="${icon}"></span></p>
                                
                            </div>`;
                    
                    forecast[0].insertAdjacentHTML(`beforeend`, forDay);
                    
                    


                }
            });
            
        });

    })
    .catch(function (err)  {
        console.log("Fetch Error :-S", err);
    });

}

apiFetch2();



  










