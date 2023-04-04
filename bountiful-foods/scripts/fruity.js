
 


/* const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birth = document.createElement('p');
      let death = document.createElement('p');
      let children = document.createElement(`p`);
      let service = document.createElement(`p`);

      let portrait = document.createElement('img');

      
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name + " " + prophet.lastname}`;
      birth.textContent = `Birth: ${prophet.birthdate} in ${prophet.birthplace}`;
      death.textContent = `Death: ${prophet.death}`;
      children.textContent = `Children: ${prophet.numofchildren}`;
      service.textContent = `Length of Service: ${prophet.length} years`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name}  ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      
      card.appendChild(h2);
      card.appendChild(service);
      card.appendChild(birth);
      card.appendChild(death);
      card.appendChild(children);
      card.appendChild(portrait);
      

     
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

*/

