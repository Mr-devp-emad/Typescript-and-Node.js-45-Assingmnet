// Creating a Array
var userNames = ["Faisal", "Aamin", "Admin", "Ali", "Saeed"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",  Would You Like TO See a Status Report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
    }
});
