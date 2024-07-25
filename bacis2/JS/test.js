// function greet(name){
    
//     console.log("Hello, "+ name +"!");
//     console.log("Welcome to JavaScript programming.");

// }
// greet("Alice");

// x = 5;
// console.log(x);  

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };
// console.log(person.firstName); 

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function() {
    return this.brand + " " + this.model + " (" + this.year + ")";
    }
   };
// การเข้าถึง properties
console.log(car.brand); // Output: Toyota
console.log(car["model"]); // Output: Corolla
// การเรียกใช้method
console.log(car.getCarInfo()); // Output: Toyota Corolla (2020)
//เพิ่มpropertiesนอก let
car.color ="red";
console.log(car.color);
