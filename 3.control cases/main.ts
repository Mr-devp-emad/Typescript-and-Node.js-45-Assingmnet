let myName : string = "Developer Mr Eric";

console.log(myName);
// Print in Lowercase

console.log(`Lowercase : ${myName.toLowerCase()}`);

//Print in Uppercase

console.log(`Uppercase : ${myName.toUpperCase()}`);

//Print To Title Case

console.log(`Titlecase: ${myName.replace(/\b\w/g,c=>c.toUpperCase())}`);