// function show_magicians(magicians : string[]) :  void {
//     for (const magician of magicians){
//         console.log(magician.charAt(0).toUpperCase() +  magician.slice(1));
//     }
// }
// const magician :  string[]  = ["ahmed" , "rayan" , "saeed"];
// show_magicians(magician)
// function make_great(magicians: string []) : void{
//     for (let i  =  0 ; i < magicians.length; i++){
//         magicians[i] = magicians[i]  +  `  the great`
//     }
// }
// const magicians2 : string []  = ["ahmed" , "rayan" , "saeed"];
// make_great(magicians2)
// show_magicians(magicians2)
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Ahmed", "Rayan", "Saeed"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
