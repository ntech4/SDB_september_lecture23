// * Data Types

/* 
        Booleans 
        - A boolean has only two values: true or false
*/
 let on = true;
 let off = false
 console.log(on, off);

/* 
    Null
    -Null is empty value.
    think of it like an empty container: nothing is in it, but is still exists a space to null.
     */
    
    let empty = null;
    console.log(empty);

    /* 
    Undefined
     -No value is assigned and does not act like an empty container.
    */

     let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the variable.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined

/*  
    Numbers
    - Numbers are litrally numbers in JS. NO special characters are needed to write them.
    */
   let degrees = 96;
   console.log(degrees);


   let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3


// Quick cool thing:
let a = Number("42"); // turn string 
console.log(a);
