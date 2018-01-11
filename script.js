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
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
// // Objects
// var obj1 = {
//     name: "John",
//     age: 26
// };
//
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
//
// // Functions
// var age = 27;
// var obj = {
//     name: "Johnas",
//     city: "Lisbon"
// };
//
// function change(a, b) {
//     a = 30;
//     b.city = "San Francisco";
// }
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);

// Uwaga w funkcji w referencji do obiektu zmieniamy obiekt POZA funkcją!!! Nie tak jak w przypadku zmiennej prymitywnej.

////////////////////////////////////////////////
//
//Lecture: Passing functions as arguments
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2018 - el;
// }
//
// function isFullAge(el) {
//     return el >= 18;
// }
//
// function maxHeartRate(el) {
//     if (el >+ 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }
//     else {
//         return -1;
//     }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

////////////////////////////////////////////////////
//Lecture: Function returning Functions

function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    }
    else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name +"?");
        }
    }
    else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher"); // Ta zmienna jest funkcją
teacherQuestion("John"); //przywołuje funkcję w funkcji
