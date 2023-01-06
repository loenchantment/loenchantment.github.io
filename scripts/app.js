const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = 'Sister Becky Jacobs, WDD 230 Student';

const currentYear = new Date().getFullYear();
copyright.textContent = `© ${new Date().getFullYear()}`;