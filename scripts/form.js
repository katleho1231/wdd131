// Product Array
const products = [
  { id: "p100", name: "Hammer" },
  { id: "p200", name: "Screwdriver" },
  { id: "p300", name: "Wrench" },
  { id: "p400", name: "Electric Saw" }
];

const productSelect = document.querySelector("#product");

// Populate select options
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
