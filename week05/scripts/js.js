/*this targets the html*/

const list = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');

/*this adds the favorite chapters by adding an event listener creating the 
list items from the input*/
button.addEventListener('click', () => {
    const favchap = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = favchap;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
      });

      input.focus();
    
      
    });


    /*const currentYear = new Date().getFullYear();*/
copyright.textContent = `© ${new Date().getFullYear()}`;

//this gets the value input in the text box
//let quantity = document.querySelector(`#q`).value;

let text = document.lastModified;
document.getElementById("datemod").innerHTML = text;