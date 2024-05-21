// Part 1 Math problems.

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Checking if all numbers are divisable by 5
let isDivisable;
if(n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 ){
    isDivisable = "YAAAY! YES! All Numbers are divisable By 5!";
    console.log(isDivisable)
} else{
    isDivisable = "One or more Numbers aren't divisable by 5!"
    console.log(isDivisable)
}

// Checking if all numbers are divisable by 5
let FirstLgLast;
    if(n1 > n4 ){
    FirstLgLast = "YAAAY! YES! The first_number is Greater than the Last_number!";
    console.log(FirstLgLast);
} else{
    FirstLgLast = "OOOH! NO!The first_number is NOT Greater than the Last_number! ";
    console.log(FirstLgLast);
}

/*Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
 */ 
let subResult = (n2 - n1);
console.log("Subtraction results in: " + subResult);
let multResult = (subResult * n3);
console.log("Multiplication results in: " + multResult);
let remResult = (multResult % n4);
console.log("Division results in a remainder of: " + subResult);

/*Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in
other logic comparisons. Rename the variable as appropriate.
*/
let isnotLess25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
if(isnotLess25){
    console.log("Used Negation in initialization to avoid using it later,\n and that had the same result as shown: " + isnotLess25);
}else{
    console.log("Used Negation in initialization to avoid using it later,\nand that had A DIFFERENT result as shown: " + isnotLess25);
}