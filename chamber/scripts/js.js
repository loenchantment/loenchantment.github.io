//this is for the date at the top of the html page
const datefield = document.querySelector(".date");

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;


//this puts the date in the copyriight in the footer 
copyright.textContent = `© ${new Date().getFullYear()}`;

//this puts the last modified date in the footer
let text = document.lastModified;
document.getElementById("datemod").innerHTML = text;

/*banner script*/
const banner = document.querySelector(".banner");

if (now.getDay() == 1 || now.getDay() == 2)  {
    banner.style.display = "block";
}
  

//Connecting the elements to the html. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.setAttribute(`alt`, `hamburger menu icon`);



// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle or switches to responsive
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);














 












 