// Creating a Array
let userNames  =  ["Faisal"  ,  "Aamin"  ,  "Admin"  ,  "Ali"  ,  "Saeed"];

userNames.forEach(oneUser  => {
    if(oneUser  ===  "Admin"){
        console.log(`Hello ${oneUser},  Would You Like TO See a Status Report?`)

    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }

})