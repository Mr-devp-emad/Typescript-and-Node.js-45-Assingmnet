
function show_magicians(magicians : string[]) :  void {
    magicians.forEach(name  =>  console.log(name));

}

function make_great(magicians:  String[]){
    return magicians.map(name  =>  `The Great ${name}`);
}

//Namea an  arry of magicians
let magician_names   = ["Ahmed" , "Rayan" , "Saeed"];

//Makin a copy of my array

let copy_magicians_names  =  magician_names.slice()

//Moddyfiying the copied array the great
let copy_great_magicians  =   make_great(copy_magicians_names);

//Showing both arrays Original annd Copied

//Original
show_magicians(magician_names);

//Copied
show_magicians(copy_great_magicians);
