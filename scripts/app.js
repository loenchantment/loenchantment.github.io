const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = 'Becky Jacobs, WDD 230 Assignments';

const currentYear = new Date().getFullYear();
copyright.textContent = `© ${new Date().getFullYear()}`;

//this gets the value input in the text box
let quantity = document.querySelector(`#q`).value;