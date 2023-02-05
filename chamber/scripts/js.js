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

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

/*I tried working on this for longer than I care to admit :(

const banner = document.querySelector(".banner");
const today = new Date().getDay();

if (today = 6) {
    banner.style = display: block;
}
  */  


 