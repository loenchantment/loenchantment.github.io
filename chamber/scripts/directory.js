const link = 'https://loenchantment.github.io/chamber/data.json';
async function getDirectoryData() {
    const response = await fetch(link);
    const data = await response.json();
    //console.log(data.link);  // note that we reference the directory array of the data object given the structure of the json file
    //displayDirectory(data.link);
    displayBusinesses(data.businesses);
  }

  getDirectoryData();

  const displayBusinesses = (businesses) => {
     const cards = document.querySelector('div.cards'); // select the output container element
   
     businesses.forEach((business) => {
       // Create elements to add to the div.cards element
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let address = document.createElement('p');
       let phone = document.createElement('p');
       let hours = document.createElement(`p`);
       let website = document.createElement(`a`);
       let image = document.createElement('img');
      

      // Build the image portrait by setting all the relevant attribute
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `Logo for ${business.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
   
       // Build the h2 content out to show the prophet's full name - finish the template string
       
       h2.textContent = `${business.name}`;
       phone.textContent = `Phone Number: ${business.phonenum}`;
       address.textContent = `Address: ${business.address}`;
       hours.textContent = `Hours: ${business.hours}`;
       website.textContent = `Website: ${business.website}`;
       website.setAttribute('href', business.website);
       website.setAttribute(`target`, `_blank`);
     
      
   
       // Append the section(card) with the created elements
       card.appendChild(image);
       card.appendChild(h2);
       card.appendChild(phone);
       card.appendChild(address);
       card.appendChild(hours);
       card.appendChild(website);
      
       
 
      
   
       cards.appendChild(card);
     } // end of forEach loop
   )} // end of function expression
 
 
 
 
  
