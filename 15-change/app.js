var guestList = ["Kamran", "Junaid", "Jahanzeb", "Ahmad"];
var dontCome = guestList[0];
console.log(dontCome, "I Won`t join");
guestList.splice(0, 1, "Rehman");
guestList.forEach(function (guest) {
    return console.log("Asslam U Alikum ".concat(guest, ", would you like to Dinner with me? "));
});
