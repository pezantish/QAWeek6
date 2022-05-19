'use strict'
//1
let A;
for(A = 100; A<=200; A++){
    console.log(A);
}
//2
for(A = 100; A<=200; A++){
    if (A%2 === 0){
        console.log("-");
    } else{
        console.log("*");
    }
}
//3
for(A = 1; A<=10; A++){
    for(let i=1; i<=10; i++){
        console.log(A);
    }
}

//5: Date() nicked from solution, was originally done as strings. 
//Other than the data type, my own work.
let day = new Date().getDay();
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 0:
        console.log(`Sunday`);
        break;
    default:
        console.log(`Invalid range`);
        break;
  }
