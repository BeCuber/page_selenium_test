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

// Evento para manejar la compra de ítems
selectItems.addEventListener("change", function () {
    const selectedItem = selectItems.options[selectItems.selectedIndex];

    if (n === 3) return;
    if (selectedItem.value === "") return;

    // Agregar el texto seleccionado al textarea
    equipmentTextArea.value += selectedItem.text + "\n";
    purchasedItems.push(selectedItem);  // Guardar el ítem comprado en el array

    // Eliminar el elemento seleccionado del select
    selectItems.remove(selectItems.selectedIndex);

    // Llamar a la función para actualizar los atributos
    updateAttrbItemsPurchased(selectedItem);

    n += 1;
});

// Función para actualizar los atributos basados en el ítem seleccionado
function updateAttrbItemsPurchased(selectedItem) {
    let currentPv = parseInt(totalpv.textContent);
    let currentPm = parseInt(totalpm.textContent);
    let currentDmg = parseInt(totaldmg.textContent);
    let currentGold = parseInt(totalgold.textContent);

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

// Evento para manejar la devolución del último ítem comprado
paybackButton.addEventListener("click", function() {
    if (n === 0 || purchasedItems.length === 0) return;  // Si no hay ítems para devolver

    // Eliminar el último ítem del textarea
    let itemsText = equipmentTextArea.value.trim().split("\n");
    let lastItemText = itemsText.pop();  // Eliminar el último ítem
    equipmentTextArea.value = itemsText.join("\n") + (itemsText.length > 0 ? "\n" : "");  // Actualizar textarea

    // Obtener el último ítem comprado desde el array
    const lastPurchasedItem = purchasedItems.pop();

    // Agregar de nuevo el ítem al select
    const option = document.createElement("option");
    option.value = lastPurchasedItem.value;
    option.text = lastPurchasedItem.text;
    selectItems.appendChild(option);

    // Actualizar los atributos: sumar 15 al oro
    totalgold.textContent = parseInt(totalgold.textContent) + 15;
    
    // Reducir el contador
    n -= 1;
});

const clearButton = document.getElementById("btnclear");
// Evento para el botón Clear
clearButton.addEventListener("click", function () {
    location.reload();  // Recargar la página
});


/*
btn Clear -> clear



*/

