//Test of EQUILITY with String 
var Mango = "mango";
var UpperCaseMANGO = "MANGO";
var five = 5;
var nine = 9;
var seasons = ["Summer", "Winter", "Spring", "Autmun"];
console.log("Do mango is equal to mango?");
console.log(Mango == "Mango");
//Test of UNEQUAITY with String
console.log("\n mango is not equal to mango?");
console.log(Mango != "mango");
//Test with lower case
console.log("\n Do MANGO is equal to mango after converting to Lowercase? ");
console.log(UpperCaseMANGO.toLowerCase() == "mango");
console.log("\n Do MANGO is not equal to mango after converting to Lowercase? ");
console.log(UpperCaseMANGO.toLowerCase() != "mango");
//      NUMERICAL TESTS
console.log("\n Is five is equal to nine?");
console.log(five == nine);
// NOT EQUAL TO
console.log("\n Is five is not equal to nine?");
console.log(five != nine);
//GREATER THAN
console.log("\n Is five is greater than two?");
console.log(five > 0);
//      LESS THAN
console.log("\n is nine smaller than 6?");
console.log(nine < 6);
//   GREATER THAN OR EQUAL TO
console.log("\n is five is greater than or equal to 3?");
console.log(five >= 3);
//   LESS THAN OR EQUAL TO 
console.log("\n Is nine is smaller than or equal to 5?");
console.log(nine <= 5);
//     Test of "AND" ,  "OR"  operaters
//    Using  (AND   =   && )
console.log("\n nine is not equal to 5 and nine is greater than 5?");
console.log(nine != 5 && nine > 5);
console.log("\n nine is not equal to 5 and nine is greater than 5?");
console.log(nine != 5 && nine > 15);
//USING    ("OR   ||  ")
console.log("\n 9 is greater than 30 OR   9 is equal to 9?");
console.log(9 > 30 || 9 == 9);
console.log("\n 9 is greater than 30 OR   9 is not equal to 9?");
console.log(9 > 30 || 9 != 9);
//  Test whether an item is include in array
console.log("\n Is Winter include in my season array");
console.log(seasons.includes("Winter"));
//    NOT INCLUDE
console.log("\n Is not Winter include in my season array");
console.log(!seasons.includes("Winter"));
