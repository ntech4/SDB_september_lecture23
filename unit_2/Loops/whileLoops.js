/* 
? While lOOPS

- WHILE LOOP, LOOPS THROUGH A BLOCK OF CODE while A SPECIFIC CONDITION IS TRUE

structure:
while (condition) {
    ...code to run
}
    the main purpose for while loops are when the iteration is uncertain.
    aka we don't know how much content is in the data we are referencing/looping through

*/

let n = 1;
while (n < 10) {
    console.log(`n before addition, start of loopL ${n}`); // staring interpolation
    n++;
    console.log(`n after addition, start of loopL${n}`);
    console.log("-----------");

}

console.log(`while loop os finished running, final value: ${n}`)

// use a while looop to creaTE and log a string, pretend online cart

let cartMsg = '';
let z = 0; // zero iten in cart

while (z<5) {
    z++;
    cartMsg = `You have ${z} items in your cart!`;
    console.log(cartMsg); }
    console.log(`you have ${z} items in your cart, want to checkout now?`);

// create  spider man story line with a while loop and an array!
let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
  ];

  let structure = city[0];
//  console.log(structure); // building

  let pos = 0;
 // console.log(city[pos]); // building
 console.log("Welcome to the Adventures of Spider Man!! Looks like there's a thief on the loose!");
 while (structure!= "empty street") {
    console.log(`spider man swings from the ${structure} in pursuit of the thief`);
    pos++;
    structure = city[pos];
    console.log(`spider man lands on the ${structure}.`);
    console.log(`----------`)
 }

 console.log(`Spider Man lands in the ${structure}! He corner and confronts the thief! Spidy saves the day again!!`);

 /* 
 ? Do while loops
 - also loop through a block of code while a specified condition is true BUT..
 !loop will run the code block once, before checking if the condition is true and will keep running as long as the condition stays true.

 structure:
 do {
    code to run
 } while (condition)
 - works just like while the exception that it will run the code block at least once.
 */

 // do code block will run once, even if condition is not ture:

 let value = 20;
 do {
    value *= 2;
    console.log("do code block is running...")
 } while (value >100);
 console.log(value);

 // mock switch a group of accounts from deactivated to active, use a boolean
 // declare and initialize an object called accounts


 let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
  };

  // use square bracket notation with the object's property ket to get the t/f value 
  // want a variable that starts at 1 (acct1, etc) that we can increment

let acctNum = 1
do{
    // create a log message to prove the account os currently inactive
    console.log(
        `acct${acctNum} is currently inactive: set to ${
          accounts[`acct${acctNum}`]
        }.`
      );
      // activating message and set acct to true
      console.log
      ('activating.....');
      account[`acct${acctNum}`] = ture;

      //confirmation message
      console.log
      `acct${acctNum} is currently active: set to  ${
        accounts[`acct${acctNum}`]}.');
        // after acct is activated(true), add 1 to 
}