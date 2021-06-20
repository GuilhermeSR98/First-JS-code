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
 let passage = true;

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
         console.log(`Client unattended, canno't buy.`)
         passage = false;
     }
 }
 if(passage == true || accompanied == true) {
    console.log('boarded passenger')
 }

