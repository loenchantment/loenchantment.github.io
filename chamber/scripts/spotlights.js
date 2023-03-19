//much of this came from Borthe Blazzrd's Random Distinct Selection codepen
const NUMOFSPOTS = 3;
//much of this code came from the prophets activity
//const makeSpotlight = document.getElementsByClassName("spotlight");
//console.log(display);
//this connects the javascript to the json file, the await allows the page
//to continue rendering if the response doesn't come immediately
const link = `https://loenchantment.github.io/chamber/data.json`;
async function getDirectoryData() {
    const response = await fetch(link);
    const data = await response.json();
    //console.log(data.link);
    displayBusinesses(data.businesses);
}



//this makes the cards by creating elements and adding them to the page
const displayBusinesses = (businesses) => {
    let findGold = businesses.filter((business) => {
        return business.membership == "Gold";
    });
    let indexTracker = [];
    let theChosen = 0;
    while (theChosen < NUMOFSPOTS) {
    let randomIndex = Math.floor(Math.random() * findGold.length);

    if (!indexTracker.includes(randomIndex)) {
        let chosenBusiness = findGold[randomIndex];

        

        const spotlights = document.querySelector(".spotlights");
        let spotlight = document.createElement("div");
        spotlight.setAttribute("class", "spotlight");

        let h3 = document.createElement("h3");
        h3.setAttribute("class", "spotTitle");

        let address = document.createElement("p");
        address.setAttribute("class", "spotAddress");

        let phone = document.createElement("p");
        phone.setAttribute("class", "spotPhone");


        let website = document.createElement("a");
        website.setAttribute("class", "spotWeb");

        let image = document.createElement("img");



        //this brings the images to the cards and should set the alt
        image.setAttribute(`src`, chosenBusiness.imageurl);
        image.setAttribute(`alt`, `Logo for ${chosenBusiness.name}`);
        image.setAttribute(`class`, `spotImg`);

        //this adds the content from the json to the spotlights
        h3.textContent = `${chosenBusiness.name}`;
        phone.textContent = `${chosenBusiness.phonenum}`;
        address.textContent = `${chosenBusiness.address}`;
     
        website.textContent = `Visit Our Website`;
        website.setAttribute(`href`, chosenBusiness.website);
        website.setAttribute(`target`, `_blank`);
        website.setAttribute(`class`, `spotWeb`);

        //this adds the created elements to the section
        spotlight.appendChild(image);
        spotlight.appendChild(h3);
        spotlight.appendChild(phone);
        spotlight.appendChild(address);
        spotlight.appendChild(website);

       spotlights.appendChild(spotlight);

       theChosen++;
       indexTracker.push(randomIndex);
     } //this is the end of the for Each loopy

    
    
     //this is the end of the function

    }
}


getDirectoryData();



