// PRODUCT ARRAY (GIVEN IN ASSIGNMENT)
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Washing Machine" },
  { id: "p3", name: "Microwave" },
  { id: "p4", name: "Refrigerator" },
  { id: "p5", name: "Bluetooth Speaker" }
];

// DYNAMIC SELECT
const selectElement = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;  // value = id
  option.textContent = product.name; // displayed name
  selectElement.appendChild(option);
});

// FOOTER DATES
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
