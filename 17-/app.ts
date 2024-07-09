// Creating a guestList Arry
let guestList  =  ["Kamran","Junaid","Rehman","Taha"];

// making Varible for those guest who cant come
let dontCome  =  guestList[0];

//Print the name of guest who cant come
console.log(dontCome,"I Won`t Come At Dinner");

//Add or remove Values from Guest List arry
guestList.splice(0  ,  1,  "Jahanzeb");

//message print for bigger table
console.log("Good News ! We Have Found a Bigger Table For Dinner");

//Adding a new value at starting index of arry
guestList.unshift("Ali");

//Adding a new value at ending index of arry
guestList.push("Salman");

// Get a middle index of our guest list arry
let middleIndex: number  =  Math.floor(guestList.length / 2);

// Adding a new guest middle index of arry
guestList.splice(middleIndex, 0 ,  "Usama");

//Print Message of Updated List
console.log("Updated List of our Guests");

//Sending a invitation to our guests one by one with their names
guestList.forEach(guestList  =>

    console.log(`Assalam U Alikum ${guestList},  Would You Like TO do Dinner with me?`));

    
    //Inform that only two guest can be invied for Dinner 
console.log("Unfortunately, the new Dinner table wont arrive on time, So I can only invite two Guests to Dinner with me ");

// Using while loop to remove Guests from the arry until only two names remain
while(guestList.length > 2) {
    let removedGuest  =  guestList.pop();
console.log(`Sorry,  ${removedGuest} I cant invite you to Dinner `);
}

// Sending a invitations to the last two Guests on the list
console.log("Invitations to the lat 2 Guests");

guestList.forEach (lasttwo  => 
    console.log(`luckly  ${lasttwo},you are still invited to Dinner`)
);

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:" , guestList);
