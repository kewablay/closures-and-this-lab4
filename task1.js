// Task 1

let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// Calling greet() directly
person.greet(); 


