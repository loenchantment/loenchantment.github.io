//much of this code came from the prophets activity
const makeSpotlight = document.getElementsByClassName("spotlight");
//console.log(display);
//this connects the javascript to the json file, the await allows the page
//to continue rendering if the response doesn't come immediately
const link = `https://loenchantment.github.io/chamber/data.json`;
async function getSpotlightData() {
    const response = await fetch(link);
    const data = await response.json();
    //console.log(data.link);
    displayBusinesses(data.businesses);
}


getSpotlightData()

//this makes the cards by creating elements and adding them to the page
const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cards");

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let hours = document.createElement("p");
        let website = document.createElement("a");
        let image = document.createElement("img");


        //this brings the images to the cards and shoul set the alt
        image.setAttribute(`src`, business.imageurl);
        image.setAttribute(`alt`, `Logo for ${business.name}`);

        //this adds the content from the json to the cards
        h2.textContent = `${business.name}`;
        phone.textContent = `Phone Number: ${business.phonenum}`;
        address.textContent = `Address: ${business.address}`;
        hours.textContent = `Hours: ${business.hours}`;
        website.textContent = `Website: ${business.website}`;
        website.setAttribute(`href`, business.website);
        website.setAttribute(`target`, `_blank`);

        //this adds the created elements to the section
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(hours);
        card.appendChild(website);

       cards.appendChild(card);
    }//this is the end of the for Each loopy


    
    )} //this is the end of the function

    
