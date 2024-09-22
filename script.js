//==== CAMBIO DRAGON ====//
// Obtener los elementos de los botones de radio
const radioPurple = document.getElementById("purple");
const radioGreen = document.getElementById("green");
const radioBlue = document.getElementById("blue");

// Obtener el elemento img que vamos a modificar
const imgElement = document.querySelector(".img-content");

// Función para cambiar la imagen según el botón de radio seleccionado
function changeImage() {
    if (radioPurple.checked) {
        imgElement.src = "../images/morado.png"; // Cambia la imagen a morado
    } else if (radioGreen.checked) {
        imgElement.src = "../images/verde.png"; // Cambia la imagen a verde
    } else if (radioBlue.checked) {
        imgElement.src = "../images/azul.png"; // Cambia la imagen a azul
    }
}

// Agregar eventos de cambio a los botones de radio
radioPurple.addEventListener("change", changeImage);
radioGreen.addEventListener("change", changeImage);
radioBlue.addEventListener("change", changeImage);

//====  SLIDERS ATRIBUTOS ====//
// Función para actualizar el valor del div al mover el slider
function updateSliderValue(sliderId, valueId) {
    const slider = document.getElementById(sliderId);
    const valueDiv = document.getElementById(valueId);
    
    // Actualizar el valor inicial
    valueDiv.textContent = slider.value;
    
    // Escuchar cambios en el slider
    slider.addEventListener('input', function() {
        valueDiv.textContent = slider.value;
    });
}

// Aplicar la lógica a cada slider
updateSliderValue('slidercon', 'attrvaluecon');
updateSliderValue('sliderstr', 'attrvaluestr');
updateSliderValue('slidermag', 'attrvaluemag');

//===== TEXTAREA ITEMS ====//
// Obtener los elementos necesarios
const selectItems = document.getElementById("itemsforsell");
const equipmentTextArea = document.getElementById("equipment");

// Agregar un evento para cuando cambie la selección en el select
selectItems.addEventListener("change", function() {
    // Obtener el valor seleccionado
    const selectedItem = selectItems.options[selectItems.selectedIndex];

    // Evitar que la opción por defecto sea seleccionada
    if (selectedItem.value === "") {
        return; // No hacer nada si se selecciona la opción por defecto
    }

    // Verificar cuántos elementos hay en el textarea
    const currentItems = equipmentTextArea.value.split("\n").filter(item => item.trim() !== "");
    if (currentItems.length >= 3) {
        alert("Solo puedes agregar un máximo de 3 elementos.");
        return;
    }

    // Agregar el texto seleccionado al textarea si no excede el límite
    equipmentTextArea.value += selectedItem.text + "\n";

    // Eliminar el elemento seleccionado del select
    selectItems.remove(selectItems.selectedIndex);
});