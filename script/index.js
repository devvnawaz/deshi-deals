function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document
  .getElementById("cooking-stick-add-to-cart-btn")
  .addEventListener("click", function () {
    const title = getElement("cooking-stick-title").innerText;
    const price = getElement("cooking-stick-price").innerText;
    // console.log(title.innerText);
    // console.log(title, price);

    const totalPrice = getElement("total-price").innerText;

    currentTotal = Number(price) + Number(totalPrice);

    getElement("total-price").innerText = currentTotal.toFixed(2);
  });
