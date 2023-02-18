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
