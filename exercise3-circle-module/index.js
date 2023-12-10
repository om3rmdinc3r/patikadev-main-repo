const { circleArea, circleCircumference } = require("./circle");

const radius = 5;
const area = circleArea(radius);
const circumference = circleCircumference(radius);

// Sonuçları consola yazdır
console.log(`Circle Area: ${area}`);
console.log(`Circle Circumference: ${circumference}`);
