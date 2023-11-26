
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
const args = process.argv.slice(2);
const radius = parseFloat(args[0]);

if (isNaN(radius) || radius <= 0) {
  console.log("Pozitif bir sayı giriniz..");
} else {
  const area = calculateCircleArea(radius);
  console.log(
    `Yarıçapı ${radius} birim olan dairenin alanı: ${area.toFixed(2)} birim olarak hesaplanır.`
  );
}
