/* Aquí va la lógica para mostrar los resultados de búsqueda */
const container = document.querySelector(".jobs-listings");

fetch("./data.json")
  .then((response) => response.json())
  .then((jobs) => {
    /* 
    `createDocumentFragment` se utiliza mucho cuando se tiene que pintar muchos elementos en el DOM de manera consecutiva. Pintar de manera consecutiva elementos en el DOM para los navegadores implica usar muchos recursos, por lo que esto termina siendo una buena alternativa.

    Lo que hace esto es crear una caja en memoria que almacena todos los elementos que se van a pintar.
    Y una vez que se el `forEach` termina y tenemos todos los elementos dentro de la caja, podemos agregar la caja completa al DOM sin tener que hacerlo múltiples veces por cada iteración.

    En resumen, creamos una caja virtual con todos los `jobs`, y cuando los tenemos todos, los agregamos al DOM de una sola vez.
    */
    const jobsFragment = document.createDocumentFragment();

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
      jobsFragment.appendChild(li);
    });
    
    container.appendChild(jobsFragment);
  });
