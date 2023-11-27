// Creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
// (Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).

// MILESTONE 2
// Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// creo un Array con le immagini
const imageArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let itemContent = '';

// creo div con immagini allegate
for (let i = 0; i < imageArray.length; i++) {
    itemContent += `<div class="item"><img src="img/${ imageArray[i] }"></div>`;
    
};
// aggiungo a box
const itemSlider = document.querySelector('.item-slider').innerHTML = itemContent;

const item = document.getElementsByClassName('item');

// do classe active a box
let itemActive = 0;

item[itemActive].classList.add('active');

// creo tasti per scorrimento
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');
    

    if ( itemActive === imageArray.length-1 ) {
        itemActive = 0;
    }
    else {
        itemActive++;
    };

    item[itemActive].classList.add('active');
    
});

prev.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');
   

    if ( itemActive === 0 ) {
        itemActive = imageArray.length - 1;
    }
    else {
        itemActive--;
    };

    item[itemActive].classList.add('active');
    
});