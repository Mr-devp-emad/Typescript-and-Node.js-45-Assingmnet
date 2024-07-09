//Making a Array of Countries and Print its Original Order
let countriesToVisit: String[]  =  ["Saudia Arabia","China","Denmark","Iran"];

console.log("Original Order:", countriesToVisit);

//Print the Array in Alphabetical Order without modifiying the Actual Array List
console.log("Alphabetical Order:" , [...countriesToVisit].sort());

//Show that the array is still in its Original Order
console.log("Still in original order:" , countriesToVisit);

//Print the Array in Reversed Order without modifiying the Actual Array List
console.log("Reverse Order:" , [...countriesToVisit].reverse());

//Show that the array is still in its Original Order
console.log("Still in original order:" , countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:",  countriesToVisit.reverse());

// Print the Array to show that its back in Original Order
console.log("Back to Original Order:" , countriesToVisit.reverse());

//Print the array to show that it has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:"  , countriesToVisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed again:",  countriesToVisit.reverse());

