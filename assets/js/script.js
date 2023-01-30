const regionSelect = document.getElementById("region-select");
const countriesContainer = document.getElementById("countries-container");

let countries = [];

fetch("https://restcountries.com/v2/all")
  .then(response => response.json())
  .then(data => {
    countries = data;
    countries.sort((a, b) => (a.name > b.name ? 1 : -1));
    renderCountries();
    renderRegions();
    console.log(data)
  });

function renderCountries() {
  let filteredCountries = countries;
  const selectedRegion = regionSelect.value;

  if (selectedRegion) {
    filteredCountries = countries.filter(
      country => country.region === selectedRegion
    );
  }

  const html = filteredCountries
    .map(
      country => `
        <div class="country">
          <img src="${country.flag}" alt="${country.name} flag">
          <h2>${country.name}</h2>
          <p>Population: ${country.population.toLocaleString()}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital}</p>
        </div>
      `
    )
    .join("");

  countriesContainer.innerHTML = html;
}

function renderRegions() {
  const regions = Array.from(
    new Set(countries.map(country => country.region))
  ).filter(region => region !== "");

  const options = regions
    .map(
      region => `
        <option value="${region}">${region}</option>
      `
    )
    .join("");

  regionSelect.innerHTML += options;
}

regionSelect.addEventListener("change", renderCountries);



 









// Dark mode:

const button = document.getElementById("dark-mode-btn");
const text = document.getElementById("dark-mode-text");
  button.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      text.textContent = " Light Mode";
    } else {
      text.textContent = " Dark Mode";
    }
});

