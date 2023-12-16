/* 

    MILESTONE 2
    Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
    Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
    Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

*/

// Arrey con risorse
const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];
// Indice dell'arrey è 0
let currentIndex = 0;

// Container
const boxImages = document.querySelector('.container-img');

// Immagine
const imgElement = document.createElement('img');

// Immagine nel container
boxImages.append(imgElement);

// Classe img-fluid
imgElement.classList.add('img-fluid');

// Img al caricamento della pagina
imgElement.src = images[currentIndex];

// Mi assegno l'intervallo in una variabile
const clock = setInterval(changeImg, 1000);

// Funzione
function changeImg() {
    /*
       Se l'indice attivo è minore di array.lenght allora indice++,
       altrimenti se l'indice è == a array.lenght
    */
    if (currentIndex < (images.length - 1) /*(questa è l'ultima)*/) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    imgElement.src = images[currentIndex];
}























// // Click
// up.addEventListener('click', function () {

//     if (currentIndex < images.length) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }

//     imgElement.src = images[currentIndex];
// });

// down.addEventListener('click', function () {

//     // Quando si clicca giù, se l'indice è 0 ritorno all'ultimo indice, altrimenti fai --;

//     if (currentIndex == 0) {
//         currentIndex = images.length - 1; // l'ultima
//     } else {
//         currentIndex--;
//     }

//     imgElement.src = images[currentIndex];
// })
