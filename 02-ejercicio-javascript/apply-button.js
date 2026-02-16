/* Aquí va la lógica para dar funcionalidad al botón de "Aplicar" */
const JobsListing = document.querySelector(".jobs-listings");

JobsListing?.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disable = true;
  }
});
