'use strict'
//1
let darthVader = new Object();
darthVader.Allegiance = "empire";
darthVader.Weapon = "lightsabre";
darthVader.Sith = true;

//2
console.log(`Darth Vader's allegiance is to the ${darthVader.Allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.Weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.Sith}`);
console.log(`Darth Vader is a Jedi? ${!darthVader.Sith}`);

//3
let myArray = ["hello", 'everyone.'];
console.log(`Length of array: ${myArray.length}`);
myArray.push("It's", "a", "pleasure.");
console.log(`Length of array: ${myArray.length}`);
myArray.shift();

let concat = "";
for (let i of myArray){
    concat = `${concat}${i} `;
}
console.log(concat);

//JSON
let jason = {"name": "Jason", "surname": "File"};
let peter = {"name": "Peter", "surname": "File", "thats": "PEETa File, NOT PEEDo File"};

  