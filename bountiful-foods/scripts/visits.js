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
    //console.log(numVisits);
    localStorage.setItem("visits-1s", numVisits);