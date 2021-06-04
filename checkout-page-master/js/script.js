// empty values
document
  .querySelectorAll(".form__input")
  .forEach((input) => (input.value = ""));
// select option dropdown
const inputCountry = document.querySelector(".form__input--select");
const optionEl = document.querySelectorAll(".option");

optionEl.forEach((op) =>
  op.addEventListener("click", function (e) {
    e.preventDefault();
    inputCountry.value = op.textContent;
  })
);
// prevent default btn
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Successful Message by @KuroMicho");
});
