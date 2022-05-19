'use strict';
//1: True, False
//2: False, True
//3

//let age = parseInt(prompt("How old are you?"));
let age = 35;

if (age<18){
    console.log("Underage");
} else if (age<65){
    console.log("Adult")
} else {
    console.log("OAP")
}

//4
let bool = (age > 50 ? "over": "under");
//alert(`You are ${bool} fifty.`)
console.log(`You are ${bool} fifty.`)