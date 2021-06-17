const btnPrev = document.querySelector('#switch1');
const btnNext = document.querySelector('#switch2');
const btnPrevbis = document.querySelector('#switch1bis');
const btnNextbis = document.querySelector('#switch2bis');
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
function toggl() {
    if (john.classList.contains('display-none')) {
        john.classList.remove('display-none');
        tanya.classList.add('display-none');
    } else {
        tanya.classList.remove('display-none');
        john.classList.add('display-none');
    }
}

btnPrev.addEventListener('click', togg);
btnNext.addEventListener('click', togg);
btnPrevbis.addEventListener('click', toggl);
btnNextbis.addEventListener('click', toggl);