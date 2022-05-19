'use strict'
let user = {
    name: "John",
    years: 30
};
const {name, years:age, isAdmin=false} = user;
console.log(`Name: ${name}, Age: ${age}, Admin: ${isAdmin}.`);