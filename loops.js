console.log(`Working with arrays`);

const destinations = new Array(
    `Salvador`, 
    `Bahia`, 
    `Rio de Janeiro`
); 
destinations.push(`Gramado`); // Adding value to array
console.log(`Avaliable destinations: ${destinations}`);

//Conditionals

const age = 20;
const accompanied = true;
let passage = false;
let cont = 0;
let destinyExists = false;
const destiny = '';

if (age >= 18) { 
     console.log(`Destiny ${destinations[1]} bought.`);
     destinations.splice(1,1); //removing value from array
     passage = true;
}
else {
    console.log('Client under age.');
    if(accompanied == true) {
       console.log(`Client accompanied, destiny ${destinations[1]} bought.`);
       destinations.splice(1,1); //removing value from array
       passage = true;
    } else {
        console.log(`Client unattended, canno't buy.`);
        passage = false;
    }
}
if(passage == true || accompanied == true) {
   console.log('boarded passenger');
}

while (cont < destinations.length && destinyExists == false) {
    if (destiny == destinations[cont]) {
        destinyExists = true;
    }
    cont ++;
}
if (destinyExists == true) {
    console.log(`Destiny ${destiny} exists.`);
}
else {
    console.log(`Destiny ${destiny} isn't avaliable.`);
}
 