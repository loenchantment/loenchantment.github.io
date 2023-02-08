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

/*weather widget code*/

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');



 












 