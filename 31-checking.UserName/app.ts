// ARRAY of current users
let current_users  =  ["Suhana","Ali","Saad","Mubeen","Junaid"]

//  Array of new users
let new_users  =  ["Akbar","Emaad","Ali","Zohaib","Junaid"]

// Loop through new_users to check
new_users.forEach(new_one_user   =>  {

    // making a condition for username already exisit 
    let our_condition = (current_users.some(current_one_user    =>   current_one_user.toLowerCase()   ===  new_one_user.toLowerCase()))
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken !`)
    }else{
        console.log(`This Username ${new_one_user} is Avaliable`)
    }
})







