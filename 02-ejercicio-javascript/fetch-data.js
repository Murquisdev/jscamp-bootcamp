/* Aquí va la lógica para mostrar los resultados de búsqueda */
const container = document.querySelector(".jobs-listings");

fetch("./data.json")
  .then((response) => response.json())
  .then((jobs) => {
    jobs.forEach((job) => {
      const li = document.createElement("li");
      const article = document.createElement("article");
      article.className = "job-listing-card";

      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`;
      li.appendChild(article);
      container.appendChild(li);
    });
  });
