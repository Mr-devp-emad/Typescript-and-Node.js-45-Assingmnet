function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Namea an  arry of magicians
var magician_names = ["Ahmed", "Rayan", "Saeed"];
//Makin a copy of my array
var copy_magicians_names = magician_names.slice();
//Moddyfiying the copied array the great
var copy_great_magicians = make_great(copy_magicians_names);
//Showing both arrays Original annd Copied
//Original
show_magicians(magician_names);
//Copied
show_magicians(copy_great_magicians);
