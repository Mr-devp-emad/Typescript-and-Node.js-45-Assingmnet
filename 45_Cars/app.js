// //Creating a function
// function create_car(manufacturer, model,  ...options){
//     let car = {
//         manufacturer: manufacturer,
//         model: model
//     };
// options.forEach(option =>{
//     let[key , value] = option.split(":");
//     car[key.trim()]  =  value.trim();
// })
// return car;
// }
// let my_car  = create_car("Toyota", "Corolla" , "Color: Black" , )
// console.log(my_car);
//Creating a function
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "Corolla", "Color: Black");
console.log(my_car);
