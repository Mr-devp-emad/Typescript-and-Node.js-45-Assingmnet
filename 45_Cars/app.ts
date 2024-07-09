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



function create_car(manufacturer: string, model: string, ...options: string[]): { [key: string]: string } {
    let car: { [key: string]: string } = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

let my_car = create_car("Toyota", "Corolla", "Color: Black");
console.log(my_car);

