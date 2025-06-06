//  arrays.js
// example 1 (map)
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
};
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// example 2 (map)
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);

// example 3 (reduce)
let totalPoints = gpaPoints.reduce(getTotal)
function getTotal(total, item) {
    return total + item;
}
console.log(totalPoints)
let getAverage = totalPoints / gpaPoints.length;
console.log(getAverage);

// example 4 (filter)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log(shortWords);
//same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);

// example 5 (indexOf)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);