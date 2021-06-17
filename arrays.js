 console.log(`Working with arrays`);

 const destinations = new Array(
     `Salvador`
     `Bahia`
     `Rio de Janeiro`
 ); 
destinations.push(`Gramado`); // Adding value to array
 console.log(`Avaliable destinations: ${destinations}`);
 console.log(`Especific destination: ${destinations[1]}`)

 destinations.splice(1,1); //removing value from array