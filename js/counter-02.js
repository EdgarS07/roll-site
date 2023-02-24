// ДОБАВЛЯЕМ ПРОСЛУШКУ НА ВСЁМ ОКНЕ 
window.addEventListener('click', function(event) {
  // объявляем переменную для счётчика,но не задаём ей значение сразу 
  let counter;


  if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
    // находим родитель с помощью синтаксиса
    const counterWrapper = event.target.closest(".counter-wrapper");
    // находим нужный элемент, тот что будет меняться
    counter = counterWrapper.querySelector("[data-counter]");
  }


  // ПРОВЕРЯЕМ ЯВЛЯЮТСЯ ЛИ ЭЛЕМЕНТЫ КНОПКАМИ ПЛЮС/МИНУС
  // С ПОМОЩЬЮ УСЛОВНОЙ ИНСТРУКЦИИ IF
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } // ПРОВЕРКА НА ТОВАР, КОТОРЫЙ НАХОДИТСЯ В КОРЗИНЕ
    else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
      // удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      // вызываем функцию отображения статуса корзины Пустая/Полная
      toggleCartStatus();

      calcCartPriceAndDelivery();
    }

    
    
  }

  if (
    event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
})