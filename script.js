const avatar = document.getElementsByName('test')
const text = document.querySelectorAll('p')
const nbSlide = avatar.length
const next = document.querySelector('.right')
const previous = document.querySelector('.left')
let count = 0

function slideNext() {
    avatar[count].classList.remove('active')
    text[count].classList.remove('active')

    if (count < nbSlide - 1) {
        count++
    } else {
        count = 0
    }

    avatar[count].classList.add('active')
    text[count].classList.add('active')
}

function slidePrevious () {
    avatar[count].classList.remove('active')
    text[count].classList.remove('active')
    
    if (count > 0) {
        count--
    } else {
        count = nbSlide -1
    }
    
    avatar[count].classList.add('active')
    text[count].classList.add('active')
}

next.addEventListener('click', slideNext)
previous.addEventListener('click', slidePrevious)
