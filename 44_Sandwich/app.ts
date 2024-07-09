// Function with rest parameter
function make_Sandwich(...items : string[]){

    console.log("Making a sandwich with the following iteams: \n");

    items.forEach(singleItem  =>  console.log(singleItem));

    console.log("\n Now Enjoy Sandwich");


}

//Call the function 3 items with 3 different aurguments
make_Sandwich("Chiken" , "GarlicSauce"  , "Cheese");

make_Sandwich("Chiken" , "Bread" ,"Jelepenos" , "Egg");

make_Sandwich("Tomato" , "Lettuce" , "Butter" , "Pepporine" , "Olives" , "Bread");



