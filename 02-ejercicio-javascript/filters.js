/* Aquí va la lógica para filtrar los resultados de búsqueda */

const filterTechnology = document.querySelector("#filter-technology");
const filterLocation = document.querySelector("#filter-location");
const filterExperience = document.querySelector("#filter-experience-level");
const filterTitle = document.querySelector("#empleos-search-input");

//prettier-ignore
[filterTechnology, filterLocation, filterExperience].forEach((filter) => filter.addEventListener("change", applyFilters));
filterTitle.addEventListener("input", applyFilters);

function applyFilters() {
  const jobs = document.querySelectorAll(".job-listing-card");

  const loc = filterLocation.value;
  const exp = filterExperience.value;
  const title = filterTitle.value.toLowerCase();
  const tech = filterTechnology.value;

  jobs.forEach((job) => {
    const jobLoc = job.dataset.modalidad;
    const jobExp = job.dataset.nivel;
    const jobTitle = job.querySelector("p");
    const jobTech = job.dataset.technology || "";

    const teachArray = jobTech.split(",").map((tech) => tech.trim());

    const matchesLoc = loc === "" || loc === jobLoc;
    const matchesExp = exp === "" || exp === jobExp;
    const matchesTitle =
      title === "" || jobTitle.textContent.toLowerCase().includes(title);
    const matchesTech = tech === "" || teachArray.includes(tech);

    if (matchesTech && matchesLoc && matchesExp && matchesTitle) {
      job.style.display = "flex";
    } else {
      job.style.display = "none";
    }
  });
}
