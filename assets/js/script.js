fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

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
