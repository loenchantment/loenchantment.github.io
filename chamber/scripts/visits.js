/*this is for counting visits with local storage*/
/*prepare the display element*/
const  visitsDisplay = document.querySelector("#visits");

/*put the value in localStorage*/
let numVisits = Number(window.localStorage.getItem("visits-1s"));
console.log(numVisits);
/*will show if it's the first visit or the number of visits*/
if(numVisits !== 0) { 
  visitsDisplay.textContent = numVisits; 
}  else {
    visitsDisplay.textContent = 'Today is your first visit :)';
    }
    
    numVisits++;
    console.log(numVisits);
    localStorage.setItem("visits-1s", numVisits);
    /*second try, get help from group*/
    /*const  visitsDisplay = document.querySelector("#visits");*/

    /*put the value in localStorage*/

    /*const visitsDisplay = document.querySelector("#visits");
    let timeVisits = Number(window.localStorage.getItem("visits-86400s"));
    console.log(timeVisits);
    /*will show if it's the first visit or the number of visits*/
    /*if(timeVisits !== 86400) { 
      visitsDisplay.textContent = timeVisits; 
    }  else {
        visitsDisplay.textContent = 'Today is your first visit :)';
        }
        
        timeVisits++;
        console.log(timeVisits);
        localStorage.setItem("visits-1s", timeVisits);*/

