// ===== Product Data =====
let products = [];

async function fetchProducts() {
  try {
    const res = await fetch('../backend/getProducts.php');
    products = await res.json();
    renderProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// ===== State =====
let compareIds = [];
let currentCategory = "All";
// ===== DOM Elements =====
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const compareSection = document.getElementById("compare");
const comparisonWrapper = document.getElementById("comparisonTableWrapper");
const compareHint = document.getElementById("compareHint");
const noResults = document.getElementById("noResults");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// ===== Render Products =====
function renderProducts(query = "") {
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    noResults.textContent = `No products found matching "${query}"`;
    return;
  }

  noResults.style.display = "none";

  filtered.forEach((product) => {
    const isSelected = compareIds.includes(product.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="card-body">
        <span class="card-category">${product.category}</span>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-price">₹${product.price ? Number(product.price).toLocaleString() : 0}</p>
        <p class="eco-score-label">Eco Score</p>
        <div class="eco-score-row">
          <div class="eco-bar-track">
            <div class="eco-bar-fill" data-score="${product.ecoScore}"></div>
          </div>
          <span class="eco-score-value">${product.ecoScore}%</span>
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="compare-btn ${isSelected ? "selected" : ""}" data-id="${product.id}" style="flex:1;">
            ${isSelected ? "✓ Compared" : "+ Compare"}
          </button>
          <button class="add-to-cart-btn" data-id="${product.id}" style="flex:1; margin-top:0; padding:12px; font-size:14px;">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  // Animate eco bars after a short delay
  requestAnimationFrame(() => {
    document.querySelectorAll(".eco-bar-fill").forEach((bar) => {
      bar.style.width = bar.dataset.score + "%";
    });
  });

  // Attach compare button listeners
  document.querySelectorAll(".compare-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleCompare(parseInt(btn.dataset.id));
    });
  });
}

function filterCategory(category) {
  currentCategory = category;
  if (category === "All") {
    renderProducts();
    return;
  }

  const filtered = products.filter(p => p.category === category);

  productsGrid.innerHTML = "";

  filtered.forEach((product) => {
    const isSelected = compareIds.includes(product.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="card-body">
        <span class="card-category">${product.category}</span>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-price">₹${product.price ? Number(product.price).toLocaleString() : 0}</p>

        <p class="eco-score-label">Eco Score</p>
        <div class="eco-score-row">
          <div class="eco-bar-track">
            <div class="eco-bar-fill" data-score="${product.ecoScore}"></div>
          </div>
          <span class="eco-score-value">${product.ecoScore}%</span>
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="compare-btn ${isSelected ? "selected" : ""}" data-id="${product.id}" style="flex:1;">
            ${isSelected ? "✓ Compared" : "+ Compare"}
          </button>
          <button class="add-to-cart-btn" data-id="${product.id}" style="flex:1; margin-top:0; padding:12px; font-size:14px;">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  // animate bars
  requestAnimationFrame(() => {
    document.querySelectorAll(".eco-bar-fill").forEach((bar) => {
      bar.style.width = bar.dataset.score + "%";
    });
  });

  // attach compare button
  document.querySelectorAll(".compare-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleCompare(parseInt(btn.dataset.id));
    });
  });
}

// ===== Toggle Compare =====
function toggleCompare(id) {
  if (compareIds.includes(id)) {
    compareIds = compareIds.filter((x) => x !== id);
  } else {
    compareIds.push(id);
  }
  if (currentCategory === "All") {
    renderProducts(searchInput.value);
  } else {
    filterCategory(currentCategory);
  }
  renderComparison();
}

// ===== Render Comparison Table =====
function renderComparison() {
  const selected = products.filter((p) => compareIds.includes(p.id));

  if (selected.length >= 2) {
    compareSection.style.display = "block";
    compareHint.style.display = "none";

    const headers = selected
      .map(
        (p) => `
        <th>
          <img src="${p.image}" alt="${p.name}" class="compare-product-img" />
          <div style="margin-top:8px;">${p.name}</div>
          <button class="remove-btn" data-id="${p.id}" title="Remove">✕</button>
        </th>`
      )
      .join("");

    const rows = [
      { label: "💲 Price", getValue: (p) => `₹${p.price ? Number(p.price).toLocaleString() : 0}` },
      { label: "🌿 Eco Score", getValue: (p) => `${p.ecoScore}%` },
      { label: "🔥 Carbon Footprint", getValue: (p) => p.carbonFootprint },
      { label: "♻️ Recyclability", getValue: (p) => p.recyclability },
    ];

    const rowsHTML = rows
      .map(
        (row) => `
        <tr>
          <td>${row.label}</td>
          ${selected.map((p) => `<td>${row.getValue(p)}</td>`).join("")}
        </tr>`
      )
      .join("");

    comparisonWrapper.innerHTML = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="text-align:left;">Feature</th>
            ${headers}
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    `;
   
    let bestProduct = selected[0];

    selected.forEach(p => {
      if (p.ecoScore > bestProduct.ecoScore) {
        bestProduct = p;
      }
    });

    // Show result
    const resultDiv = document.createElement("div");
    resultDiv.className = "best-product";
    resultDiv.innerHTML = `
      🌱 <strong>Most Sustainable Product:</strong> ${bestProduct.name} (${bestProduct.ecoScore}% Eco Score)
    `;

    comparisonWrapper.appendChild(resultDiv);
    // Attach remove listeners
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleCompare(parseInt(btn.dataset.id));
      });
    });
  } else {
    compareSection.style.display = "none";
    compareHint.style.display = selected.length === 1 ? "block" : "none";
  }
}

// ===== Search =====
searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

// ===== Mobile Menu =====
mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// Close mobile nav on link click
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});

// ===== Scroll Animations =====
function handleScrollAnimations() {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
}
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener("click", () => {
    compareIds = [];           // clear selection
    renderProducts();          // re-render products
    renderComparison();        // hide comparison
  });
});
// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    handleScrollAnimations();
    checkAuthStatus();
  });
} else {
  fetchProducts();
  handleScrollAnimations();
  checkAuthStatus();
}

window.addEventListener("scroll", handleScrollAnimations);

// Event delegation for "Add to Cart"
productsGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    addToCart(e.target.dataset.id);
  }
});

// ===== AUTH & CART LOGIC =====
let isLoggedIn = false;

async function checkAuthStatus() {
  try {
    const res = await fetch('../backend/authStatus.php');
    const data = await res.json();
    isLoggedIn = data.loggedIn;
    updateNavUI(data.username);
    if(isLoggedIn) updateCartCount();
  } catch(e) {}
}

function updateNavUI(username) {
  const authNavBtn = document.getElementById('authNavBtn');
  const authMobileBtn = document.getElementById('authMobileBtn');
  const cartNavBtn = document.getElementById('cartNavBtn');
  const cartMobileBtn = document.getElementById('cartMobileBtn');
  const logoutNavBtn = document.getElementById('logoutNavBtn');
  const logoutMobileBtn = document.getElementById('logoutMobileBtn');
  
  if (isLoggedIn) {
    if(authNavBtn) authNavBtn.textContent = username;
    if(authMobileBtn) authMobileBtn.textContent = username;
    if(cartNavBtn) cartNavBtn.style.display = 'block';
    if(cartMobileBtn) cartMobileBtn.style.display = 'block';
    if(logoutNavBtn) logoutNavBtn.style.display = 'block';
    if(logoutMobileBtn) logoutMobileBtn.style.display = 'block';
  } else {
    if(authNavBtn) authNavBtn.textContent = 'Login';
    if(authMobileBtn) authMobileBtn.textContent = 'Login';
    if(cartNavBtn) cartNavBtn.style.display = 'none';
    if(cartMobileBtn) cartMobileBtn.style.display = 'none';
    if(logoutNavBtn) logoutNavBtn.style.display = 'none';
    if(logoutMobileBtn) logoutMobileBtn.style.display = 'none';
  }
}

// Modal handling
const authModal = document.getElementById('authModal');
const cartModal = document.getElementById('cartModal');
let isRegistering = false;

if (document.getElementById('authNavBtn')) {
    document.getElementById('authNavBtn').onclick = (e) => { e.preventDefault(); if(!isLoggedIn) authModal.style.display = 'flex'; };
    document.getElementById('authMobileBtn').onclick = (e) => { e.preventDefault(); if(!isLoggedIn) authModal.style.display = 'flex'; };
    document.getElementById('closeAuthBtn').onclick = () => authModal.style.display = 'none';
    
    document.getElementById('toggleAuthBtn').onclick = (e) => {
      e.preventDefault();
      isRegistering = !isRegistering;
      document.getElementById('authTitle').innerText = isRegistering ? 'Register' : 'Login';
      document.getElementById('authName').style.display = isRegistering ? 'block' : 'none';
      document.getElementById('authName').required = isRegistering;
      document.getElementById('toggleAuthBtn').innerText = isRegistering ? 'Already have an account? Login' : 'Need an account? Register';
      document.getElementById('authError').style.display = 'none';
    };
    
    document.getElementById('authForm').onsubmit = async (e) => {
      e.preventDefault();
      const endpoint = isRegistering ? '../backend/register.php' : '../backend/login.php';
      const payload = {
        email: document.getElementById('authEmail').value,
        password: document.getElementById('authPassword').value
      };
      if(isRegistering) payload.name = document.getElementById('authName').value;
    
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if(data.success) {
          authModal.style.display = 'none';
          checkAuthStatus();
        } else {
          document.getElementById('authError').innerText = data.message;
          document.getElementById('authError').style.display = 'block';
        }
      } catch(err) {
        document.getElementById('authError').innerText = 'Connection error.';
        document.getElementById('authError').style.display = 'block';
      }
    };
    
    const logout = async (e) => {
      e.preventDefault();
      await fetch('../backend/logout.php');
      isLoggedIn = false;
      updateNavUI();
    };
    document.getElementById('logoutNavBtn').onclick = logout;
    document.getElementById('logoutMobileBtn').onclick = logout;
}

// Cart Handling
async function addToCart(productId) {
  if(!isLoggedIn) {
    authModal.style.display = 'flex';
    return;
  }
  const res = await fetch('../backend/addToCart.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({product_id: productId})
  });
  const data = await res.json();
  if(data.success) {
    document.getElementById('cartBadge').innerText = data.cart_count || 0;
    if(document.getElementById('cartMobileBadge')) document.getElementById('cartMobileBadge').innerText = data.cart_count || 0;
  } else {
    alert(data.message);
  }
}

async function updateCartCount() {
  const res = await fetch('../backend/getCart.php');
  const data = await res.json();
  if(data.success) {
    document.getElementById('cartBadge').innerText = data.cart_count || 0;
    if(document.getElementById('cartMobileBadge')) document.getElementById('cartMobileBadge').innerText = data.cart_count || 0;
  }
}

const openCart = async (e) => {
  e.preventDefault();
  cartModal.style.display = 'flex';
  const res = await fetch('../backend/getCart.php');
  const data = await res.json();
  const itemsContainer = document.getElementById('cartItems');
  
  if(!data.success || data.items.length === 0) {
    itemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('cartTotal').innerText = '0';
    return;
  }
  
  document.getElementById('cartTotal').innerText = Number(data.total).toLocaleString();
  itemsContainer.innerHTML = data.items.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <img src="${item.image}" class="cart-item-img" />
        <div>
          <h4>${item.name}</h4>
          <p>₹${Number(item.price).toLocaleString()}</p>
        </div>
      </div>
      <div class="cart-item-actions">
        <button onclick="updateCartItem(${item.cart_id}, 'decrease')">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateCartItem(${item.cart_id}, 'increase')">+</button>
        <button onclick="removeCartItem(${item.cart_id})" style="background:var(--destructive); color:white; border:none; margin-left:10px;">Remove</button>
      </div>
    </div>
  `).join('');
};

if(document.getElementById('cartNavBtn')) {
    document.getElementById('cartNavBtn').onclick = openCart;
    document.getElementById('cartMobileBtn').onclick = openCart;
    document.getElementById('closeCartBtn').onclick = () => cartModal.style.display = 'none';
}

window.updateCartItem = async (cartId, action) => {
  const res = await fetch('../backend/updateCart.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({cart_id: cartId, action})
  });
  const data = await res.json();
  if(data.success) {
    updateCartCount();
    openCart(new Event('click'));
  }
};

window.removeCartItem = async (cartId) => {
  const res = await fetch('../backend/removeFromCart.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({cart_id: cartId})
  });
  const data = await res.json();
  if(data.success) {
    updateCartCount();
    openCart(new Event('click'));
  }
};

if(document.getElementById('checkoutBtn')) {
    document.getElementById('checkoutBtn').onclick = async () => {
      const res = await fetch('../backend/checkout.php');
      const data = await res.json();
      alert(data.message);
      if(data.success) {
        cartModal.style.display = 'none';
        updateCartCount();
      }
    };
}
