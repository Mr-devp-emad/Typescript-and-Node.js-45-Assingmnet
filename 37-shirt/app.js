function makeShirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt();
makeShirt("medium");
//different message
makeShirt("small", "I need a big shirt to wear");
