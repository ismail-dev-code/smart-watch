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
    }
     else {
      btnS.classList.remove("border-purple-600");
    }
  }
}
