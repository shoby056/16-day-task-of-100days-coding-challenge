// // Question 46:** Enhanced Laptop Object: Construct an object for a laptop 
// including properties `make`, `model`, `year`, and a method `describe()` 
// that logs a sentence about the laptop.
var laptop = {
    make: "",
    model: "",
    year: 0,
    // method to describe function
    describe: function () {
        console.log("this laptop is a ".concat(this.make, " ").concat(this.model, " from ").concat(this.year));
    }
};
//set the properties of object
laptop.make = "Apple";
laptop.model = "Mackbook";
laptop.year = 2022;
//call the describe method
laptop.describe();
