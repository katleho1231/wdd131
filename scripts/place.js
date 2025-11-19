// FOOTER YEAR & LAST MODIFIED
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WIND CHILL CALCULATION
const temp = parseFloat(document.getElementById("temp-value").textContent);
const speed = parseFloat(document.getElementById("speed-value").textContent);
const windchillElement = document.getElementById("windchill");

function calculateWindChill(t, s) {
  // Formula for °C
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  windchillElement.textContent = calculateWindChill(temp, speed) + " °C";
} else {
  windchillElement.textContent = "N/A";
}
