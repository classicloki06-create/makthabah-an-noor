const WHATSAPP_NUMBER = "WHATSAPP_NUMBER_HERE";
const CART_STORAGE_KEY = "maktabahAnNoorCart";

const Cart = (() => {
  let cart = loadCart();
  let drawer;
  let toastTimer;

  function loadCart() {
    try {
      const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
      return Array.isArray(storedCart)
        ? storedCart.filter((item) => Number(item.id) && Number(item.quantity) > 0)
        : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  function getProduct(id) {
    return books.find((product) => product.id === Number(id));
  }

  function getTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function updateCounters() {
    document.querySelectorAll("[data-cart-count]").forEach((counter) => {
      counter.textContent = getTotalQuantity();
      counter.hidden = getTotalQuantity() === 0;
    });
  }

  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function createDrawer() {
    if (document.querySelector("[data-cart-drawer]")) return;

    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="cart-overlay" data-cart-overlay hidden></div>
        <aside class="cart-drawer" data-cart-drawer aria-labelledby="cart-title" aria-hidden="true">
          <div class="cart-drawer-header">
            <div>
              <p class="eyebrow">Order Request</p>
              <h2 id="cart-title">Your Cart</h2>
            </div>
            <button class="icon-button" type="button" data-cart-close aria-label="Close cart">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="cart-items" data-cart-items></div>
          <div class="cart-drawer-footer">
            <p class="cart-helper">No online payment is collected. Checkout prepares a WhatsApp order request for manual confirmation.</p>
            <button class="primary-button checkout-button" type="button" data-checkout>Checkout via WhatsApp</button>
          </div>
        </aside>
        <div class="toast" data-toast role="status" aria-live="polite"></div>
      `
    );

    drawer = document.querySelector("[data-cart-drawer]");
    document.querySelector("[data-cart-overlay]").addEventListener("click", closeDrawer);
    document.querySelector("[data-cart-close]").addEventListener("click", closeDrawer);
    document.querySelector("[data-checkout]").addEventListener("click", checkout);
  }

  function renderCart() {
    createDrawer();
    updateCounters();

    const cartItems = document.querySelector("[data-cart-items]");
    const checkoutButton = document.querySelector("[data-checkout]");
    const validItems = cart
      .map((item) => ({ ...item, product: getProduct(item.id) }))
      .filter((item) => item.product);

    if (validItems.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <p class="eyebrow">Empty Cart</p>
          <h3>Your cart is waiting for products.</h3>
          <p>Add books or digital resources to prepare a WhatsApp order request.</p>
        </div>
      `;
      checkoutButton.disabled = true;
      return;
    }

    checkoutButton.disabled = false;
    cartItems.innerHTML = validItems
      .map(
        ({ product, quantity }) => `
          <article class="cart-item">
            <div class="cart-item-cover">
              <img src="${product.image}" alt="" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
              <span hidden>${product.title.slice(0, 2).toUpperCase()}</span>
            </div>
            <div class="cart-item-body">
              <h3>${product.title}</h3>
              <p>${product.format}</p>
              <div class="quantity-control" aria-label="Quantity for ${product.title}">
                <button type="button" data-quantity-decrease="${product.id}" aria-label="Decrease quantity">-</button>
                <input type="number" min="1" value="${quantity}" data-quantity-input="${product.id}" aria-label="Quantity">
                <button type="button" data-quantity-increase="${product.id}" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button class="remove-button" type="button" data-remove-item="${product.id}">Remove</button>
          </article>
        `
      )
      .join("");
  }

  function addItem(id, quantity = 1, options = {}) {
    const product = getProduct(id);
    if (!product) return;

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ id: product.id, quantity });
    }

    saveCart();
    renderCart();
    showToast(`${product.title} added to cart`);

    if (options.openCart) {
      openDrawer();
    }
  }

  function removeItem(id) {
    cart = cart.filter((item) => item.id !== Number(id));
    saveCart();
    renderCart();
  }

  function setQuantity(id, quantity) {
    const item = cart.find((cartItem) => cartItem.id === Number(id));
    if (!item) return;

    const nextQuantity = Number(quantity) || 1;
    if (nextQuantity < 1) {
      removeItem(id);
      return;
    }

    item.quantity = nextQuantity;
    saveCart();
    renderCart();
  }

  function openDrawer() {
    createDrawer();
    renderCart();
    document.querySelector("[data-cart-overlay]").hidden = false;
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("cart-open");
  }

  function closeDrawer() {
    document.querySelector("[data-cart-overlay]").hidden = true;
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cart-open");
  }

  function buildWhatsAppMessage(items) {
    const orderLines = items
      .map((item, index) => `${index + 1}. ${item.product.title} \u00D7 ${item.quantity}`)
      .join("\n");

    return `Assalamu Alaikum,

I would like to order the following items:

${orderLines}

Please share payment details.

JazakAllahu Khairan.`;
  }

  function openWhatsApp(items) {
    if (!items.length) {
      openDrawer();
      showToast("Add products before checkout");
      return;
    }

    const message = buildWhatsAppMessage(items);
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  function checkout() {
    const items = cart
      .map((item) => ({ ...item, product: getProduct(item.id) }))
      .filter((item) => item.product);

    openWhatsApp(items);
  }

  function orderSingleProduct(id) {
    const product = getProduct(id);
    if (!product) return;

    openWhatsApp([{ id: product.id, quantity: 1, product }]);
  }

  function bindEvents() {
    createDrawer();
    renderCart();

    document.addEventListener("click", (event) => {
      const openButton = event.target.closest("[data-cart-open]");
      const addButton = event.target.closest("[data-add-to-cart]");
      const removeButton = event.target.closest("[data-remove-item]");
      const decreaseButton = event.target.closest("[data-quantity-decrease]");
      const increaseButton = event.target.closest("[data-quantity-increase]");
      const directOrderButton = event.target.closest("[data-order-whatsapp]");

      if (openButton) openDrawer();
      if (addButton) addItem(addButton.dataset.addToCart, 1, { openCart: addButton.dataset.openCart === "true" });
      if (removeButton) removeItem(removeButton.dataset.removeItem);
      if (decreaseButton) {
        const item = cart.find((cartItem) => cartItem.id === Number(decreaseButton.dataset.quantityDecrease));
        if (item) setQuantity(item.id, item.quantity - 1);
      }
      if (increaseButton) {
        const item = cart.find((cartItem) => cartItem.id === Number(increaseButton.dataset.quantityIncrease));
        if (item) setQuantity(item.id, item.quantity + 1);
      }
      if (directOrderButton) orderSingleProduct(directOrderButton.dataset.orderWhatsapp);
    });

    document.addEventListener("change", (event) => {
      const quantityInput = event.target.closest("[data-quantity-input]");
      if (quantityInput) {
        setQuantity(quantityInput.dataset.quantityInput, quantityInput.value);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("cart-open")) {
        closeDrawer();
      }
    });
  }

  return {
    addItem,
    bindEvents,
    checkout,
    openDrawer,
    orderSingleProduct,
    renderCart
  };
})();
