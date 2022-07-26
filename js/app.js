// console di prova
console.log('prova')

// generare contenuto Slider
// array contenente i valori variabili dei contenuti dello slider
const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
]

// estrapolare wrapper dal dom
const slidesWrapperElement = document.querySelector('.slides-wrapper')
slidesWrapperElement.innerHTML = ''
console.dir(slidesWrapperElement)