const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-601186-wallpaper.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple.jpg"
  }
];

// ADD 3 MORE
temples.push(
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple.jpg"
  },
  {
    name: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: 1985,
    area: 19550,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: 2004,
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple.jpg"
  }
);

function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // clear

  filteredTemples.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${t.name}</h3>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area} sq ft</p>
      <img src="${t.imageUrl}" loading="lazy" alt="${t.name}">
    `;
    container.appendChild(card);
  });
}

// FILTERS
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    let filter = link.dataset.filter;

    if (filter === "old") displayTemples(temples.filter(t => t.dedicated < 1900));
    else if (filter === "new") displayTemples(temples.filter(t => t.dedicated > 2000));
    else if (filter === "large") displayTemples(temples.filter(t => t.area > 90000));
    else if (filter === "small") displayTemples(temples.filter(t => t.area < 10000));
    else displayTemples(temples); // Home
  });
});

// FOOTER SCRIPT
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// DISPLAY ALL ON LOAD
displayTemples(temples);
