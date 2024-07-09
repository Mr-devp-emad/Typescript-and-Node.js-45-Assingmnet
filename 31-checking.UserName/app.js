// ARRAY of current users
var current_users = ["Suhana", "Ali", "Saad", "Mubeen", "Junaid"];
//  Array of new users
var new_users = ["Akbar", "Emaad", "Ali", "Zohaib", "Junaid"];
// Loop through new_users to check
new_users.forEach(function (new_one_user) {
    // making a condition for username already exisit 
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken !"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is Avaliable"));
    }
});
