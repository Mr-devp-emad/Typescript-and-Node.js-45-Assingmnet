let guestList  =  ["Kamran","Junaid","Jahanzeb","Ahmad"];

let dontCome  =  guestList[0];

console.log(dontCome,"I Won`t join");

guestList.splice(0,  1,  "Rehman");

guestList.forEach(guest  =>

    console.log(`Asslam U Alikum ${guest}, would you like to Dinner with me? `)
);
