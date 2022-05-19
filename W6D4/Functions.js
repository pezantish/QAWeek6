'use strict'
//1: IIFE just for the hell of it
((num1, num2) => {console.log(num1-num2);})(1,2);

//2
let welcome = function(name, age, gender){
    console.log(`My name is ${name}, I am ${age} years old and am a ${gender}.`);
}

//3
let powerUp = (n1, n2) => n1**n2;  
console.log(powerUp(3,3));