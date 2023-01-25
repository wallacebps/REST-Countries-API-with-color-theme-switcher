fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

const button = document.getElementById("dark-mode-btn");
  button.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
});  