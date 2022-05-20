'use strict';

// Selectors
// Inputs
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let inputThree = document.querySelector("#inputThree");
let valueDiv = document.createElement("div");

// Buttons
let addBtn = document.querySelector("#addBtn");

// Divs
let mainDiv = document.querySelector("#mainDiv");

// Functionality
let calculation = () => {
    let equationString = inputOne.value + inputThree.value + inputTwo.value;
    let answer;
    if (inputThree.value === "//"){
        answer = eval(`Math.pow(${inputOne.value}, 1/${inputTwo.value})`);
    }else{
        answer = eval(equationString);
    }
    valueDiv.innerHTML = `${equationString} = ${answer}`;
    mainDiv.appendChild(valueDiv);
}

let clearResults = () => {
    mainDiv.innerHTML = "";
}

// Event Listeners
addBtn.addEventListener("click", calculation);
clearBtn.addEventListener("click", clearResults);