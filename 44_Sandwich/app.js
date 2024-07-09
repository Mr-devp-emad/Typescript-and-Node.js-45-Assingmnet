// Function with rest parameter
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following iteams: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
//Call the function 3 items with 3 different aurguments
make_Sandwich("Chiken", "GarlicSauce", "Cheese");
make_Sandwich("Chiken", "Bread", "Jelepenos", "Egg");
make_Sandwich("Tomato", "Lettuce", "Butter", "Pepporine", "Olives", "Bread");
