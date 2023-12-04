document.addEventListener("DOMContentLoaded", function() {
    function cambiarImagen() {
        var imagen = document.getElementById("imagenMostrada");
        imagen.src = "imagen2.jpg"; 
        imagen.alt = "Imagen 2";    
    }
    document.querySelector("button").addEventListener("click", cambiarImagen);
});

