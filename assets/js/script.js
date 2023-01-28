//Consumo da API
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const countries = data.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // Adiciona os países em uma lista HTML
    const list = document.querySelector('#countries');
    countries.forEach(country => {
      const item = document.createElement('li');
      item.innerHTML = `
        <img src="${country.flag}" alt="flag">
        <p class="country-name">${country.name}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
      `;
      list.appendChild(item);
    });
  });

 









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

