// Encuentra el <script> que incluyó este archivo que pasa como argumento (data-base-path) su ruta hasta la raiz
const scriptTag = document.querySelector('script[src*="header_footer.js"]');

// Obtiene la ruta desde el atributo data-base-path
const basePath = scriptTag.getAttribute("data-base-path") || "./"; // Si no se define, usa "./" por defecto

// Cargar el header
fetch(`${basePath}header.html`)
    .then(response => response.text())
    .then(data => document.body.insertAdjacentHTML("afterbegin", data))
    .catch(error => console.error("Error cargando el header:", error));

// Cargar el footer
fetch(`${basePath}footer.html`)
    .then(response => response.text())
    .then(data => document.body.insertAdjacentHTML("beforeend", data))
    .catch(error => console.error("Error cargando el footer:", error));

console.log("Cargando header y footer desde:", basePath);
