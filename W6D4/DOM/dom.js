'use strict';

let masterDiv = document.querySelector("#master");
let clicker = document.querySelector("#clicker"); //button
let save = document.querySelector("#save"); //button
let reset = document.querySelector("#reset"); //button

let saveDiv = document.createElement("div");
saveDiv.style.padding = "40px";
saveDiv.style.position="absolute";
saveDiv.style.top= "50px";
saveDiv.style.right= "500px"; 
saveDiv.style.color="red";

let childDiv = document.createElement("div");
childDiv.style.padding = "40px";
childDiv.style.position="absolute";
childDiv.style.top= "50px";
childDiv.style.left= "50px"; 
childDiv.style.color="blue";

let heading1 = document.createElement("h1");
let heading2 = document.createElement("h1");
saveDiv.appendChild(heading2);
childDiv.appendChild(heading1);
masterDiv.appendChild(saveDiv);
masterDiv.appendChild(childDiv);

let counter = 0;

let addToPage = () => {
    counter++;
    heading1.textContent=String(counter);
}

let saveToPage = () => {
    heading2.id="heading2";
    heading2.textContent = String(counter);
}

let resetCount = () => {
    counter = 0;
    heading1.textContent=String(counter);
}

clicker.addEventListener("click", addToPage);
save.addEventListener("click", saveToPage);
reset.addEventListener("click", resetCount);

