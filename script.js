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
function updateSliderValue(sliderId, valueId, totalId, otherSliderIds) {
    const slider = document.getElementById(sliderId);
    const valueDiv = document.getElementById(valueId);
    const total = document.getElementById(totalId);
    
    // Obtener los otros sliders para hacer la validación
    const otherSliders = otherSliderIds.map(id => document.getElementById(id));
    
    // Actualizar el valor inicial
    valueDiv.textContent = slider.value;
    total.textContent = (valueDiv.textContent * 10);
    
    // Escuchar cambios en el slider
    slider.addEventListener('input', function() {
        // Obtener el valor total actual de los otros sliders
        const otherTotal = otherSliders.reduce((sum, otherSlider) => sum + parseInt(otherSlider.value), 0);
        
        // Si la suma supera 8, no permitir el cambio
        if (parseInt(slider.value) + otherTotal > 8) {
            slider.value = 8 - otherTotal;  // Ajustar el valor para que no exceda 8
        }
        
        // Actualizar el valor del div y el total
        valueDiv.textContent = slider.value;
        total.textContent = (valueDiv.textContent * 10);
    });
}

// Aplicar la lógica a cada slider y pasar los otros sliders para la validación
updateSliderValue('slidercon', 'attrvaluecon', 'totalpv', ['slidermag', 'sliderstr']);
updateSliderValue('slidermag', 'attrvaluemag', 'totalpm', ['slidercon', 'sliderstr']);
updateSliderValue('sliderstr', 'attrvaluestr', 'totaldmg', ['slidercon', 'slidermag']);


//===== TEXTAREA ITEMS ====//

// Obtener los elementos necesarios
const selectItems = document.getElementById("itemsforsell");
const equipmentTextArea = document.getElementById("equipment");
let totalpv = document.getElementById("totalpv");
let totalpm = document.getElementById("totalpm");
let totaldmg = document.getElementById("totaldmg");
let totalgold = document.getElementById("totalgold");
const paybackButton = document.getElementById("payback");  // Botón de devolución

// Lista para mantener los ítems comprados en orden
let purchasedItems = [];

// Contador para limitar la selección a 3 items
let n = 0;

// Función de utilidad para obtener los valores actuales
function getCurrentValues() {
    return {
        pv: parseInt(totalpv.textContent),
        pm: parseInt(totalpm.textContent),
        dmg: parseInt(totaldmg.textContent),
        gold: parseInt(totalgold.textContent)
    };
}

// Evento para manejar la compra de ítems
selectItems.addEventListener("change", function () {
    const selectedItem = selectItems.options[selectItems.selectedIndex];

    if (n === 3) return; // Limitar la selección a 3
    if (selectedItem.value === "") return; // Evitar la opción por defecto

    // Agregar el texto seleccionado al textarea
    equipmentTextArea.value += selectedItem.text + "\n";
    purchasedItems.push(selectedItem);  // Guardar el ítem comprado en el array

    // Eliminar el elemento seleccionado del select
    selectItems.remove(selectItems.selectedIndex);

    // Llamar a la función para actualizar los atributos
    updateAttrbItemsPurchased(selectedItem);

    // **Restablecer el select a la opción predeterminada**
    selectItems.selectedIndex = 0;  // Volver a "Choose up to three..."

    n += 1;
});

// Función para actualizar los atributos basados en el ítem comprado
function updateAttrbItemsPurchased(selectedItem) {
    let { pv: currentPv, pm: currentPm, dmg: currentDmg, gold: currentGold } = getCurrentValues();  // Obtener valores actuales

    switch (selectedItem.value) {
        case "icecream":
        case "phonecharger":
        case "firstaid":
            totalpv.textContent = currentPv + 5;
            break;
        case "balloon":
        case "canteen":
            totalpm.textContent = currentPm + 5;
            break;
        case "extinguisher":
        case "rubberchicken":
            totaldmg.textContent = currentDmg + 5;
            break;
    }

    // Restar 20 al total de oro por cada compra
    totalgold.textContent = currentGold - 20;
}

// Función para actualizar los atributos al devolver un ítem
function updateAttrbItemsPayBacked(selectedItem) {
    let { pv: currentPv, pm: currentPm, dmg: currentDmg, gold: currentGold } = getCurrentValues();  // Obtener valores actuales

    switch (selectedItem.value) {
        case "icecream":
        case "phonecharger":
        case "firstaid":
            totalpv.textContent = currentPv - 5;
            break;
        case "balloon":
        case "canteen":
            totalpm.textContent = currentPm - 5;
            break;
        case "extinguisher":
        case "rubberchicken":
            totaldmg.textContent = currentDmg - 5;
            break;
    }

    // Sumar 15 al total de oro por cada devolución
    totalgold.textContent = currentGold + 15;
}

// Evento para manejar la devolución del último ítem comprado
paybackButton.addEventListener("click", function() {
    if (n === 0 || purchasedItems.length === 0) return;  // Si no hay ítems para devolver

    // Eliminar el último ítem del textarea
    let itemsText = equipmentTextArea.value.trim().split("\n");
    itemsText.pop();  // Eliminar el último ítem
    equipmentTextArea.value = itemsText.join("\n") + (itemsText.length > 0 ? "\n" : "");  // Actualizar textarea

    // Obtener el último ítem comprado desde el array
    const lastPurchasedItem = purchasedItems.pop();

    // Agregar de nuevo el ítem al select
    const option = document.createElement("option");
    option.value = lastPurchasedItem.value;
    option.text = lastPurchasedItem.text;
    selectItems.appendChild(option);

    // Llamar a la función para restar los puntos correspondientes y devolver el oro
    updateAttrbItemsPayBacked(lastPurchasedItem);

    // Reducir el contador
    n -= 1;
});


//===== CLEAR BUTTON ====//
const clearButton = document.getElementById("btnclear");
// Evento para el botón Clear
clearButton.addEventListener("click", function () {
    location.reload();  // Recargar la página
});


/*




*/

