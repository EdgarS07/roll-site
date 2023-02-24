function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

  // общая стоимость товаров
  let totalPrice = 0;

  // С помощью метода forEach перебираем все блоки с ценами в корзине
  cartItems.forEach(function (item) {
    // находим количество товара
    const amoutEl = item.querySelector("[data-counter]");
    // находим цену товара
    const priceEl = item.querySelector(".price__currency");
    // умножаем количество на цену
    // const currentPrice =
    totalPrice += parseInt(amoutEl.innerText) * parseInt(priceEl.innerText);

    
  });
  // отображаем цену в блоке "Итого"
  totalPriceEl.innerText = totalPrice;

  // если цена больше нуля, то блок доставка появляется
  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  // если больше 1200р, то статус доставки "бесплатно"
    if (totalPrice >= 1200) {
      deliveryCost.classList.add("free");
      deliveryCost.innerText = "бесплатно";
    } else {
      deliveryCost.classList.remove("free");
      deliveryCost.innerText = "250 ₽";
    }

}
