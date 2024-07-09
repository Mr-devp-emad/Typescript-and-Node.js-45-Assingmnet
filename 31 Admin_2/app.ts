let userNames  =  ["Faisal"  ,  "Aamin"  ,  "Admin"  ,  "Ali"  ,  "Saeed"];

    userNames  =  []

    if (userNames.length  === 0 ){
        console.log("Your Array is Empty we need to find some users!")
    }else{

         userNames.forEach(oneUser  => {
            if(oneUser  ===  "Admin"){
         console.log(`Hello ${oneUser},  Would You Like TO See a Status Report?`)
        
            }else{
                console.log(`Hello ${oneUser}, Thank you for logging in again.`)
            }
        
        })

    }
