/* 
    ? loop
    loops loop through a block of code a number of times.

    ! if stuvk in an accidetaly running loop:
        ctrl=c  ctrl+z, red stop buton from "code runner"

        ? for loops:
         take in 3 parameters( the within th () of a statement)
         -initial expression (starting value) 
         -condition
         -increment expression

         structure:
            for (initial expression; condition ; increment expression)
                        {... code block of logic to run}

            */

                        // start at 0 and increase to 110
                        for(i = 0; i <= 10; i++ ) {
                        console.log(i)
                        }

                        console.log("finished for loop");

            // start at 0 increase by 2 to 20
            for (i = 0; i <= 20; i+= 2){
                console.log(i);

                // console.log("you get a 50% coupon!")
            }

            // start at 10 and decrease by 1 till we reach 0

            for (i = 10;  i >= 0; i-- ) {
                console.log(i);
            }



            /* 
            ?FOR IN LOOPS
            -loop through the properties of an object

            structure:

             for ( key in object ) {
                .... code to run

                key is a random variable of our choice . object refers to the variable name of the object we are targeting
             }

            
            -
            */
             let student = {
                name:"Harry", 
                animal: "owl",
                degree: "magic",
                boyWhoLived: true
             }

             console.log(student.name); // Harry, dot notation

             console.log(student["name"]); // Harry, square bracket notation

             for (item in student) {
                console.log(item); // log each key name in the object
                console.log(student[item]); // log each value of each key
             }

             // Array is considerd an object by JS

             let catArray = [
                "taddy",
                "main coon",
                "rag doll",
                "russian gray"
             ];

for (cat in catArray ) {
    console.log(cat);
    console.log(catArray[cat]);
}

             /* 
             ? for in loops can be used on object and arrays.
             but if array index order is important, it is better to use a:
             -for loop
             -for of loop
             -Array.forEach()
             
             */


             /* 
             ? for of loops:
             - Loops through the value of an iterable object
             iterable - an object that has iterable properties(stuff it can count/go through)

             structure:
             for (variable of iterable ) {
                .... code to execute/run
             }

             variable is any word we choose to use, iterable is the name of any iterable "thing"

             can loop over Arrays, etc.
             !for of loops do not will play with objects (they can't iterate over them).

             
             */

             let dogArray = [
                "Husky",
                "shih tzo",
                "corgi",
                "catabula",
                "Shiba"
             ];
             for (pupper of dogArray){
                console.log("for of loop: ", pupper);

             }

             for (doggo of dogArray){
                // use an if conditional to make a separate console.log for Husky
                if (doggo === "Husky"){
                    console.log(`I think the ${doggo} is yelling/screaming for his breakfast`)
                  }  else if (doggo === "Shiba") {
                        console.log(`the ${doggo} os sitting there judging every one.`)
                    }

                } else{
                    console.log(`the ${doggo} is sitting there quietly`)
                }
             }