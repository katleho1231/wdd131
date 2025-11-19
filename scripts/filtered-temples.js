// ========== TEMPLE DATA =============

const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple.jpg"
  },
  {
    name: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple.jpg"
  },

  // ========== ADDED 3 EXTRA TEMPLES ==========
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple.jpg"
  }
];

// ========== DISPLAY FUNCTION ==========
function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // Clear old temples

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ========== FILTER BUTTONS ==========
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => 
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.getElementById("new").addEventListener("click", () => 
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.getElementById("large").addEventListener("click", () => 
  displayTemples(temples.filter(t => t.area > 90000))
);
document.getElementById("small").addEventListener("click", () => 
  displayTemples(temples.filter(t => t.area < 10000))
);

// ========== FOOTER ==========
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ========== LOAD ALL TEMPLES ON START ==========
displayTemples(temples);
