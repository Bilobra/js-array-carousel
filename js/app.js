// console di prova
console.log('prova')

// array contenente i valori variabili dei contenuti dello slider
const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
]

// NUOVO ARRAY per salvare i miei dati
const slideElements = []

// creo variabile che associ il mio [i] = 0 ( i di partenza) x attribuire classe active
let currentIndex = 0

// estrapolare wrapper dal dom
const slidesWrapperElement = document.querySelector('.slides-wrapper')
slidesWrapperElement.innerHTML = ''
console.dir(slidesWrapperElement)

// generare contenuto Slider
// creando un ciclo che crei: 
// li 
// li + classe
// agiungo classe active solo alla prima slide [i]=0
// img 
// img + valore src
// appendo img in li
// appendo li(img) in wrapper
// ------------------------------------------------------------
// ciclo for
for (let i = 0; i < slides.length; i++) {

    // creo li
    const li = document.createElement('li')

    // aggiungo classe a li
    li.className = 'slide'

    // aggiungo classe active a currentIndex 
    if (i === currentIndex) {
        li.classList.add('active')
    }

    // creo img
    const img = document.createElement('img')

    // controllo con dir se esiste la proprietà SRC x attribuire valore
    // console.dir(img)

    // attribuisco valore src che trovo nell'array
    img.src = slides[i]

    // appendo img in li
    li.append(img)

    // appendo li in wrapper
    slidesWrapperElement.append(li)

    // salvo i miei dati in una costante, potrebbero servirci per altre funzioni
    // pushandoli in un nuovo array
    slideElements.push(li)

    console.log(li)
}
// -----------------------------------------------------------------

// IMPLEMENTARE CONTROL ARROWS
// estrapoliamo freccia next
// creiamo un listener che al click 
// tolga la classe active alla prima img
// aggiunga la classe acive all'img successiva

// estrapoliamo freccia next
const nextArrowElement = document.querySelector('.arrow-next')

// add listener
nextArrowElement.addEventListener('click', function () {
    // sapendo che la classe active è posta sull'img con currentIndex = 0 
    // creiamo una const con la classe attiva
    const lastIndex = slideElements.length - 1

    const slideAttiva = slideElements[currentIndex]
    // togliamo la classe a currentIndex=0
    slideAttiva.classList.remove('active')
    if ( currentIndex < lastIndex){
        // se non siamo arrivati alla fine aumentiamo l'indice
        currentIndex++
    }else{
        currentIndex = 0
    }
    // creo const di img successiva 
    const slideSuccessiva = slideElements[currentIndex]
    // aggiungiamo all'img successiva la classe active al click 
    slideSuccessiva.classList.add('active')

    // facciamo sì che ad ogni click il nostro currentIndex aggiunga + 1 a se stesso, per cabiare img
    


})

// ----------------------
// UGUAL MODO 
// freccia prev

const prevArrowElement = document.querySelector('.arrow-prev')

// add listener
prevArrowElement.addEventListener('click', function () {
    const lastIndex = slideElements.length - 1

    const slideAttiva = slideElements[currentIndex]
    slideAttiva.classList.remove('active')

    if(currentIndex === 0){
       currentIndex = lastIndex
    }else{
        currentIndex--
    }


    const slideSuccessiva = slideElements[currentIndex ]
    slideSuccessiva.classList.add('active')

    // currentIndex++



})