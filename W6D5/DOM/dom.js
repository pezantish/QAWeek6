'use strict';

//DONE LARGELY IS JS FOR LEARNING PURPOSES
//, A LOT SHOULD BE DONE IN HTML/CSS 
//MASTER DIV (ALL WRITING)
let masterDiv = document.querySelector("#master");

//BUTTON DIV
let buttonDiv = document.querySelector("#buttons");
buttonDiv.style.position= "absolute";
buttonDiv.style.right = "40%";
buttonDiv.style.left = "40%";
buttonDiv.style.top = "45%";
//BUTTONS
let clicker = document.querySelector("#clicker"); 
let save = document.querySelector("#save"); 
let reset = document.querySelector("#reset"); 

//RED WRITING DIV (MAX REACHED)
let saveDiv = document.createElement("div");
saveDiv.style.position="absolute";
saveDiv.style.top= "49%";
saveDiv.style.right= "40%";
saveDiv.style.left= "40%";
saveDiv.style.color="red";

//BLUE WRITING DIV
let childDiv = document.createElement("div");
childDiv.style.position="absolute";
childDiv.style.top= "30%";
childDiv.style.right= "50%"; 
childDiv.style.color="blue";

//INIT WRITING
let heading1 = document.createElement("h1");
let heading2 = document.createElement("h1");
heading1.textContent = "0";
heading2.textContent = "Max reached: 0";

//ORGANISES DIVS
saveDiv.appendChild(heading2);
childDiv.appendChild(heading1);
masterDiv.appendChild(saveDiv);
masterDiv.appendChild(childDiv);

let counter = 0;
let maxCounter = 0;

//CLICKER
let addToPage = () => {
    counter++;
    heading1.textContent=String(counter);
}

//SAVE MAX COUNT
let saveToPage = () => {
    if (maxCounter < counter){
        maxCounter=counter;
    }
    heading2.textContent = `Max reached: ${String(maxCounter)}`;
}

//RESET COUNT
let resetCount = () => {
    counter = 0;
    heading1.textContent=String(counter);
}

// EVENT LISTENERS
clicker.addEventListener("click", addToPage);
save.addEventListener("click", saveToPage);
reset.addEventListener("click", resetCount);

