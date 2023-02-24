// НАХОДИМ ЭЛЕМЕНТЫ С ПОМОЩЬЮ СИНТАКСИСА НИЖЕ
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
// НАХОДИМ ЭЛЕМЕНТЫ С ПОМОЩЬЮ СИНТАКСИСА ВЫШЕ




// ОТСЛЕЖИВАЕМ КНОПКИ МИНУС/ПЛЮС
btnMinus.addEventListener('click', function() {
    if(parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
    }


})
btnPlus.addEventListener("click", function () {
    counter.innerText = ++counter.innerText;
});
// ОТСЛЕЖИВАЕМ КНОПКИ МИНУС/ПЛЮС


