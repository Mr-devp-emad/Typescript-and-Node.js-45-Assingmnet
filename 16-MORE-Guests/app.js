// Creating a guestList Arry
var guestList = ["Kamran", "Junaid", "Rehman", "Taha"];
// making Varible for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "I Won`t Come At Dinner");
//Add or remove Values from Guest List arry
guestList.splice(0, 1, "Jahanzeb");
//message print for bigger table
console.log("Good News ! We Have Found a Bigger Table For Dinner");
//Adding a new value at starting index of arry
guestList.unshift("Ali");
//Adding a new value at ending index of arry
guestList.push("Salman");
// Get a middle index of our guest list arry
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest middle index of arry
guestList.splice(middleIndex, 0, "Usama");
//Print Message of Updated List
console.log("Updated List of our Guests");
//Sending a invitation to our guests one by one with their names
guestList.forEach(function (guestList) {
    return console.log("Assalam U Alikum ".concat(guestList, ",  Would You Like TO do Dinner with me?"));
});
