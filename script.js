// Konstruktor

// var Person = function(name, yearOfBirth, job) {
//     this.name = name; //john.name = name (właściwość z nawiasu funkcji)
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function() {
//     //     console.log(2018 - this.yearOfBirth);
//     // }
// }
//
// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// }
//
// var john = new Person("John", 1990, "teacher");
// john.calculateAge();
// // console.log(john);


//Object.create
//
// var personProto = {
//     calculateAge: function() {
//         console.log(2018 - this.yearOfBirth);
//     }
// };
//
// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";
//
// var jane = Object.create(personProto, {
//     name: { value: "Jane" },
//     yearOfBirth: { value: 1969 },
//     job: { value: "designer" }
// });


// Primitives vs objects
// Prymitywne przechowują wartości, a obiekty są referencjami (odwołują się, ale nie przechowują).

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: "Johnas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
}
change(age, obj);

console.log(age);
console.log(obj.city);

// Uwaga w funkcji w referencji do obiektu zmieniamy obiekt POZA funkcją!!! Nie tak jak w przypadku zmiennej prymitywnej.
