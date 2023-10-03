// Single line comments: ctrl+/ or cmd+/
// 

/* shift+alt+a  */

// * Variables

/* 
Variable are named containers for storing data values.
We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

we can crete  variable through 3 different keywords:
1. var
2. let
3.const
4 (none/no keyword)
 */

let a = 2;
//  (1)         (2)       (3)     (4)

     let         b         =        1;
     /*

/* 
    1. use JS keyword to denote the creation of a variable
    2. the name of the variable, what the developer refers to/call on to get the stored value.
        variable names should be to the print/pertain to the date.
            -should be camelCase,
    3. Assignment operator: equal sign, = 
    4. the initial variable value, it's starting data value.
    */

    // * Variable Declaration Vs Initialization
    // Declaration: declaring the variable but nit the assigning it.
    let x;
    console.log("Declaration of x: ", x); // Declaration of x:  undefined
    let apple;
    // Initialization: variable is given/set a value.
    let y =4;

    let life = 43;

    // reassign a variable value:
    x = 20;
    console.log("Initializaton 1:", x);

    x = 100;
    console.log("initialization 2:", x);

    //* Assigning to other variable / create variable from variable!
    let firstName = "Nemat"; // string datatype
    let lastName = "Ghanizada";

    let fullName = firstName + " " + lastName;
    let fullN = firstName + lastName;

    /* 
        *CONSOLE
        -A place to see text output / code  result.
        -there is a console object attached to the Browser (web).
        -we have a console in VSC view result/what is logged.
    */
   console.log(fullName)
   console.log(2+2);
   console.log(x);


//    Use multiple items/variables in console.log()

let today = "great!";
const javaScript = "fun!";
console.log(today, javaScript);

today = "super!";
// javaScript = "Meh."; // typeError: assignment to constant variable
console.log(today, javaScript);
