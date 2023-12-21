import productsList from "./productsList";
import addToCartIcon from "../assets/icons/bt_add_to_cart.svg";

const main = document.querySelector(".main-container");
//ToggleUserMenu
const userEmail = document.querySelector(".user-email");
const userMenu = document.querySelector("#userMenu");
//ToggleMobileMenu
const burgerMenu = document.querySelectorAll(".burgerButton");
const mobileMenu = document.querySelector("#mobileMenu");
//ToggleCheckout
const checkout = document.querySelector(".checkout");
const buttonCart = document.querySelector("#buttonCart");
const buttonCloseCheckout = document.querySelector("#buttonCloseCheckout");
//ProductDetails
const asideProductDetails = document.querySelector(".product-detail");
const closeDetailsProduct = document.querySelector("#closeDetails");
//Products List
const productsContainer = document.querySelector("#productsContainer");

//ToggleUserMenu
userEmail.addEventListener("click", () =>
  userMenu.classList.toggle("desktop-menu--inactive")
);

//ToggleMobileMenu
burgerMenu.forEach((element) =>
  element.addEventListener("click", () =>
    mobileMenu.classList.toggle("mobile-menu--inactive")
  )
);

//ToggleCheckout
const toggleCheckout = () => {
  checkout.classList.toggle("checkout--disable");
  checkout.classList.toggle("checkout--active");
};

buttonCart.addEventListener("click", toggleCheckout);
buttonCloseCheckout.addEventListener("click", toggleCheckout);

//ProductDetails
const productDetail = (name, price, image) => {
  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");

  const productImage = document.createElement("img");
  productImage.classList.add("image");
  productImage.src = image;
  productImage.alt = "bike";
  productContainer.append(productImage);

  for (let i = 0; i < 3; i++) {
    const point = document.createElement("div");
    point.classList.add("point");
    productContainer.append(point);
  }

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = price;
  productInfo.append(priceParagraph);

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = name;
  productInfo.append(nameParagraph);

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa cumque asperiores excepturi non rem laboriosam eaque velit labore dignissimos";
  productInfo.append(descriptionParagraph);

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("button-add-to-cart");

  const cartImage = document.createElement("img");
  cartImage.classList.add("image-add-to-cart");
  cartImage.src = `${addToCartIcon}`;
  cartImage.alt = "cart";
  addToCartButton.append(cartImage);
  addToCartButton.append("Add to cart");

  productInfo.append(addToCartButton);
  productContainer.append(productInfo);
  asideProductDetails.append(productContainer);

  closeDetailsProduct.addEventListener("click", () => {
    asideProductDetails.classList.add("product-detail--inactive");
    productContainer.remove();
  });
};

//ProductList
const productCarts = productsList.map((product) => {
  const productCart = document.createElement("div");
  productCart.classList.add("product-cart");
  productCart.innerHTML = `
    <img src="${product.image}" alt="product" />
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <button>
        <img src=${addToCartIcon} />
      </button>
    </div>
  `;

  productCart.addEventListener("click", () => {
    const existingProductContainers =
      document.querySelectorAll(".product-container");
    if (
      existingProductContainers.length === 0 &&
      !checkout.classList.contains("checkout--active") &&
      userMenu.classList.contains("desktop-menu--inactive")
    ) {
      const price = productCart.querySelector("p:nth-child(1)").textContent;
      const name = productCart.querySelector("p:nth-child(2)").textContent;
      const imageSrc = productCart.querySelector("img").src;
      productDetail(name, price, imageSrc);
      asideProductDetails.classList.remove("product-detail--inactive");
    }
  });

  return productCart;
});

productCarts.forEach((productCart) => {
  productsContainer.append(productCart);
});
