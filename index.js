// let username;
// username = window.prompt("What is your username?");
// console.log(username);


// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent=username;
// }


const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference +"cm";
}


