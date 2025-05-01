// VARIABLES VS CONSTANTS
const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;
console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

//TYPE COERSION
const one = 1;
const two = '2';

let result = one * two //changed 2 into an int
console.log(result)

result = one + two  //changed one into a string
console.log(result)

result = one + Number(two)  //told to see two as a number
console.log(result)

//SCOPE
let global = 'I\'m global';

function exampleFunction() {
    let block = "I'm block level or local";
    console.log(block);
    console.log(global);
}

// console.log(block); -> it's an error
console.log(global);
exampleFunction();

globle = "I am also global"; //misspled made a new variable
console.log(globle)

// const element = document.querySelector("#myIdName")
// const element = document.querySelectorAll(".myClass")
// element.innerText = "New stuff"
// element.interHTML = "<p>New Stuff</p>"
// element.style.color = "blue";
// class.classList.add("highlighted") -> adds a class

// const variable = document.createElement("p");
// element.textContent = "Content"
// const container = document.querySelectorAll(".container")
// container.appendChild(variable)

// OR
// variable.innerHTML = '<p>New Content</p>'

//.setAttribute("attribute", "value")
// .getAttribute, .removeAttribute