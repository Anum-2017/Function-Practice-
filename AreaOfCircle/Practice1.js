"use strict";
// Find the area of a circle
function calculateCircleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}
const radius = 10;
const area = calculateCircleArea(radius);
console.log("The area of the circle is:", area);
