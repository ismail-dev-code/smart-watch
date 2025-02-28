const ringBtn = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringBtn.length; i++) {
  const newB = ringBtn[i];
  newB.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");

    // purple add korar age sob gulake check kore purple thakele remove kre dibo and onno ekta border add kore dibo
    for (let f = 0; f < ringBtn.length; f++) {
      ringBtn[f].classList.remove("border-yellow-300");
      ringBtn[f].classList.add("border-gray-300");
    }

    //   color add koirlam re
    event.target.classList.add("border-yellow-300");

    event.target.classList.remove("border-gray-300");
    const productImage = document.getElementById("product-image");
    // productImage.src ="./images/gray.png"
    productImage.src = "./images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const btnS = document.getElementById("size-" + sizes[i]);
    const element = sizes[i];
    if (size === element) {
      btnS.classList.add("border-purple-600");
    } else {
      btnS.classList.remove("border-purple-600");
    }
  }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    const quantityElement = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityElement.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityElement.innerText = newQuantity;
  });
}

// add to cart
let cartCount = 0;
document.getElementById("add-to-cart").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity > 0) {
    const checkOutContainer = document
      .getElementById("checkout-container")
      .classList.remove("hidden");
    cartCount = cartCount + quantity;
    document.getElementById("cart-count").innerText = cartCount;

    // const selectedColorBtn = document.querySelector(
    //   "button.border-purple-600.w-6"
    // );
    // const selectedColor = selectedColorBtn.id.split("-")[0];

    // const selectedSizeBtn = document.querySelector(
    //   "button.border-purple-600:not(.w-6)"
    // );
    // const selectedSize = selectedColorBtn.innerText.split(" ");
    // console.log(selectedSize);
  } else {
    alert("Please select a Quantity");
  }
});

// const quantityElement = document.querySelectorAll(".quantity-button");
// for (let btn of quantityElement) {
//   btn.addEventListener("click", function (event) {
//     const amount = event.target.innerText==='+'? 1 : -1;
//     console.log(amount);
//     const quantity = parseInt(document.getElementById("quantity").innerText);
//     console.log(quantity);
//   });
// }
