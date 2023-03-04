
//const buttonarea = document.createElement('div');

const gridbutton = document.createElement('button');

gridbutton.textContent = `grid view`;

console.log(gridbutton);


const listbutton = document.createElement('button');
listbutton.textContent = 'list view';

console.log(listbutton);

const cardsmain = document.querySelector('.cardsmain');


cardsmain.appendChild('gridbutton');
cardsmain.appendChild('listbutton');





