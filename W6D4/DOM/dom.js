'use strict';

let masterDiv = document.querySelector("#master");
let buttonDiv = document.querySelector("#buttons");
//buttonDiv.style.padding = "40px";
buttonDiv.style.position= "absolute";
//buttonDiv.style.left = "50%";
buttonDiv.style.right = "39%";
buttonDiv.style.top = "45%";
//buttonDiv.style.right= "500px"; 
let clicker = document.querySelector("#clicker"); //button
let save = document.querySelector("#save"); //button
let reset = document.querySelector("#reset"); //button

let saveDiv = document.createElement("div");
saveDiv.style.position="absolute";
saveDiv.style.top= "49%";
saveDiv.style.right= "40%"; 
saveDiv.style.color="red";

let childDiv = document.createElement("div");
childDiv.style.position="absolute";
childDiv.style.top= "30%";
childDiv.style.left= "50%"; 
childDiv.style.color="blue";

let heading1 = document.createElement("h1");
let heading2 = document.createElement("h1");
heading1.textContent = "0";
heading2.textContent = "Max reached: 0";
saveDiv.appendChild(heading2);
childDiv.appendChild(heading1);
masterDiv.appendChild(saveDiv);
masterDiv.appendChild(childDiv);

let counter = 0;
let maxCounter = 0;

let addToPage = () => {
    counter++;
    heading1.textContent=String(counter);
}

let saveToPage = () => {
    if (maxCounter < counter){
        maxCounter=counter;
    }
    heading2.textContent = `Max reached: ${String(maxCounter)}`;
}

let resetCount = () => {
    counter = 0;
    heading1.textContent=String(counter);
}

clicker.addEventListener("click", addToPage);
save.addEventListener("click", saveToPage);
reset.addEventListener("click", resetCount);

