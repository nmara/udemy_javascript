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

// function interviewQuestion(job) {
//     if (job === "designer") {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     }
//     else if (job === "teacher") {
//         return function(name) {
//             console.log("What subject do you teach, " + name +"?");
//         }
//     }
//     else {
//         return function(name) {
//             console.log("Hello " + name + ", what do you do?");
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion("teacher"); // Ta zmienna jest funkcją
// teacherQuestion("John"); //przywołuje funkcję w funkcji
//
// var designerQuestion = interviewQuestion("designer");
// designerQuestion("Jane");
//
// interviewQuestion("teacher")("Ann"); //it works, because it goes from left to right.


//////////////////////////////////////////////////////////
//Lecture: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
//
// game();

// IIFE is good for data privacy, because you can't reach var outside of IIFE (OK, but isn't it a rule for all function????)
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }) ();
//
// // console.log(score);
//
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5); // 5 is our goodLuck

//////////////////////////////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
    var a = " years left until retirement.";
    return function(yearOfBirth) { //Anonimowa funkcja
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
// retirement(66)(1990); //The same result as above

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === "designer") {
            console.log(name + ", can you please explain what UX design is?");
        }
        else if (job === "teacher") {
            console.log("What subject do you teach, " + name +"?");
        }
        else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

interviewQuestion("designer")("Jane");
