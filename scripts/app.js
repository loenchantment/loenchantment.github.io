/*const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = 'Becky Jacobs: Web Design Student';*/

/*const currentYear = new Date().getFullYear();*/
copyright.textContent = `© ${new Date().getFullYear()}`;

//this gets the value input in the text box
//let quantity = document.querySelector(`#q`).value;

let text = document.lastModified;
document.getElementById("datemod").innerHTML = text;