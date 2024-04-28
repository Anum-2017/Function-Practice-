// Find the area of a circle

function calculateCircleArea(radius: number): number {
    const area: number = Math.PI * radius * radius;
    return area;
}

const radius: number = 10; 
const area: number = calculateCircleArea(radius);
console.log("The area of the circle is:", area);
