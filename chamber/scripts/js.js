const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

/*const currentYear = new Date().getFullYear();*/
copyright.textContent = `© ${new Date().getFullYear()}`;

let text = document.lastModified;
document.getElementById("datemod").innerHTML = text;

/*banner script*/

const banner = document.querySelector(".banner");

if (now.getDay() == 1 || now.getDay() == 2)  {
    banner.style.display = "block";
}
  

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



/*input for the wind chill function*/
const temp = document.querySelector('#temp');
let tempr = parseInt(temp.textContent);
const speed = document.querySelector('#speed');
let speedr = parseInt(speed.textContent);
/*const windChill = document.querySelector('#chill');*/

/*let windChill = tempr + speedr;
/*console.log(windChill);*/

if (tempr > 50 || speedr < 3) {
    document.getElementById("chill").innerHTML = "N/A";
}

else if (tempr <= 50 || speedr > 3) {
/*function buildCHill();

/*this computes the windchill*/
let windChill = 35.74 + 0.6215 * tempr - 35.75 * Math.pow(speedr, 0.16) + 0.4275 * tempr * Math.pow(speedr, 0.16);
console.log(windChill);

/*this will round down the answer*/
windChill = (windChill > tempr) ? tempr : windChill;

/*This will make the windchill appear on the console*/
console.log(windChill);

document.getElementById("chill").innerHTML = Math.round(windChill) + " F";
console.log(windChill);
}
/*will this produce this in the html?*/








 












 