
 
const url2 =`https://api.openweathermap.org/data/2.5/forecast?lat=33.16&lon=-117.35&appid=95559c3fa41634d94f7b019a83c593f6&units=imperial`;

//how do i get the windchill? I need to get the speed and temp into a function somehow
async function apiFetch() {
    try {
      const response = await fetch(url2);
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
   var forecastTemp = document.querySelector('#forecast-temp');

  function  displayResults(forecastData) {
    forecastTemp.innerHTML = `${forecastData.main.temp.toFixed(0)}`;
  
  }


  
  


 