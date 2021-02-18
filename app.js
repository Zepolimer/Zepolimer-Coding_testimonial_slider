const btnPrev = document.querySelector('#switch1');
const btnNext = document.querySelector('#switch2');
const tanya = document.querySelector('.quote-container1');
const john = document.querySelector('.quote-container2');

function togg() {
    if (tanya.classList.contains('display-none')) {
        tanya.classList.remove('display-none');
        john.classList.add('display-none');
    } else {
        john.classList.remove('display-none');
        tanya.classList.add('display-none');
    }
}

btnPrev.addEventListener('click', togg);
btnNext.addEventListener('click', togg);