document.getElementById("mostrarMensaje").addEventListener("click", function() {
    var mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block"; // Muestra el mensaje
    var foto = document.getElementById("foto");
    foto.style.display = "block"; // Muestra la imagen
});

// Mostrar el modal después de 1 segundo
setTimeout(function() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}, 1000);

// Cerrar el modal cuando se haga clic en el botón verde
document.getElementById("botonVerde").addEventListener("click", function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
});

// Acción para el botón gris (puedes modificarla según lo que necesites)
document.getElementById("botonGris").addEventListener("click", function() {
    alert("Botón gris presionado");
});