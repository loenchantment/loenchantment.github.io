var d = new Date();

//find today's date
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

document.getElementById("day").value = day + "/" +  month + "/" +  year;


//set the timey wimey field

var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;



console.log("time");
console.log("day");




