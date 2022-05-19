'use strict';

let masterDiv = document.querySelector("#master");
let clicker = document.querySelector("#clicker");
let save = document.querySelector("#save");
let counter = 0;

// saveDiv.id = "saveDiv";

let addToPage = () => {
    counter++;
    let childDiv = document.createElement("div");
    let heading = document.createElement("h1");
    let countText = document.createTextNode(String(counter));
    heading.appendChild(countText);
    childDiv.appendChild(heading);
    masterDiv.appendChild(childDiv);
}

let saveToPage = () => {
    let saveDiv = document.createElement("div");
    saveDiv.style.padding = "40px";
    saveDiv.style.position="absolute";
    //saveDiv.style.top= "10px";
    saveDiv.style.right= "500px"; 
    saveDiv.style.color="red";
    let heading = document.createElement("h1");
    heading.id = 'heading';
    heading.innerHTML = String(counter);
    //document.getElementById("heading").innerText = String(counter);
    saveDiv.appendChild(heading);
    masterDiv.appendChild(saveDiv);
}
clicker.addEventListener("click", addToPage);
save.addEventListener("click", saveToPage);

