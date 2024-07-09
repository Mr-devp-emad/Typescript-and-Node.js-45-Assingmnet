function makeShirt(size  : string = `Large`  ,  text  : string =  `I love typescript`) : void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt(`medium`)

//different message
makeShirt(`small` , `I need a big shirt to wear`)
