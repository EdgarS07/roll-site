const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {


  if (event.target.hasAttribute("data-cart")) {
    // console.log('click')

    // находим карточку с товаром с помощью метода closest
    const card = event.target.closest(".card");

    // собираем данные с этого товара и записываем их в единый объект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemInBox: card.querySelector("[data-items-in-box]").innerText,
      weght: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,

    };

    // собранные данные подставляем в шаблон, для этого используем шаблонную строку с тильдой
    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="roll img">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">"${productInfo.title}"</div>
										<div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weght}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<!-- СЧЁТЧИК -->
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;


              cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)


  }


});
