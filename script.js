// ===== Product Data =====
const products = [
  {
  id: 1,
  name: "Stainless Steel Water Bottle",
  price: 600,
  ecoScore: 89,
  carbonFootprint: "1.1 kg CO₂",
  recyclability: "100% Recyclable",
  image: "https://i.pinimg.com/736x/b0/6d/6e/b06d6eb2dfd8ab2852456948e9cd119c.jpg",
  category: "Drinkware",
},
{
  id: 2,
  name: "Glass Water Bottle",
  price: 500,
  ecoScore: 91,
  carbonFootprint: "0.9 kg CO₂",
  recyclability: "Fully Recyclable",
  image: "https://i.pinimg.com/1200x/48/fc/be/48fcbe6bd46a74978cbee5cbaee63834.jpg",
  category: "Drinkware",
},
{
  id: 3,
  name: "Copper Water Bottle",
  price: 1000,
  ecoScore: 87,
  carbonFootprint: "1.3 kg CO₂",
  recyclability: "100% Recyclable",
  image: "https://i.pinimg.com/1200x/b0/c0/49/b0c049be19756cc3ecf7b45e5d77521e.jpg",
  category: "Drinkware",
},
{
  id: 4,
  name: "Jute Shopping Bag",
  price: 600,
  ecoScore: 93,
  carbonFootprint: "0.9 kg CO₂",
  recyclability: "100% Biodegradable",
  image: "https://i.pinimg.com/1200x/71/b8/dc/71b8dc80591735adf46e7b7509122b34.jpg",
  category: "Bags",
},
{
  id: 5,
  name: "Reusable Cotton Bag",
  price: 450,
  ecoScore: 95,
  carbonFootprint: "0.7 kg CO₂",
  recyclability: "100% Biodegradable & Reusable",
  image: "https://i.pinimg.com/1200x/d5/45/7e/d5457e04f735f23a88b7310ea80b66ba.jpg",
  category: "Bags",
},
{
  id: 6,
  name: "Upcycled Denim Bag",
  price: 800,
  ecoScore: 89,
  carbonFootprint: "1.3 kg CO₂",
  recyclability: "Upcycled Material",
  image: "https://i.pinimg.com/1200x/ad/67/dc/ad67dc994f672c5fb29a0048d673097d.jpg",
  category: "Bags",
},
  {
    id: 7,
    name: "Solar Power Bank",
    price: 1850,
    ecoScore: 78,
    carbonFootprint: "3.5 kg CO₂",
    recyclability: "Partially Recyclable",
    image: "https://i.pinimg.com/736x/6c/46/52/6c4652e88b087be5c069bd34b4aa0ab4.jpg",
    category: "Electronics",
  },
  {
  id: 8,
  name: "Wooden Power Bank",
  price: 1499,
  ecoScore: 90,
  carbonFootprint: "1.6 kg CO₂",
  recyclability: "Partially Biodegradable",
  image: "https://i.pinimg.com/1200x/3f/73/eb/3f73eb8555abb1a310426ae749bb2677.jpg",
  category: "Electronics",
},

  {
    id: 9,
    name: "Beeswax Food Wraps",
    price: 400,
    ecoScore: 95,
    carbonFootprint: "0.3 kg CO₂",
    recyclability: "100% Biodegradable",
    image: "https://i.pinimg.com/1200x/45/3d/1a/453d1ac29a244a02a3c6078a37b43c40.jpg",
    category: "Kitchen",
  },
  {
  id: 10,
  name: "Paper Food Wrap",
  price: 199,
  ecoScore: 89,
  carbonFootprint: "0.5 kg CO₂",
  recyclability: "100% Recyclable",
  image: "https://i.pinimg.com/1200x/b6/8e/56/b68e56739f87a51294c31671793b7a8a.jpg",
  category: "Kitchen",
},
{
  id: 11,
  name: "Brown Paper Food Wrap",
  price: 299,
  ecoScore: 88,
  carbonFootprint: "0.55 kg CO₂",
  recyclability: "100% Recyclable & Biodegradable",
  image: "https://i.pinimg.com/736x/83/b0/dc/83b0dcebb7e4837a1d23b7177f9bb2b8.jpg",
  category: "Kitchen",
},
  {
    id: 12,
    name: "Bamboo Toothbrush",
    price: 199,
    ecoScore: 96,
    carbonFootprint: "0.2 kg CO₂",
    recyclability: "100% Biodegradable",
    image: "https://i.pinimg.com/1200x/31/b1/fd/31b1fd4ee6a3f87d4f5d50ad39bf2016.jpg",
    category: "Personal Care",
  },
  {
  id: 13,
  name: "Wooden Toothbrush",
  price: 249,
  ecoScore: 94,
  carbonFootprint: "0.22 kg CO₂",
  recyclability: "100% Biodegradable",
  image: "https://i.pinimg.com/736x/2f/9b/cb/2f9bcb2406b905def4c3cccd6255cd87.jpg",
  category: "Personal Care",
},
  {
  id: 14,
  name: "Organic Cotton Shirt",
  price: 1599,
  ecoScore: 90,
  carbonFootprint: "1.5 kg CO₂",
  recyclability: "Fully Biodegradable",
  image: "https://i.pinimg.com/736x/c6/f9/4f/c6f94f3c64c62702e7ef5a3c63ceb2be.jpg",
  category: "Clothing",
},
{
  id: 15,
  name: "Hemp Casual Shirt",
  price: 2450,
  ecoScore: 94,
  carbonFootprint: "1.2 kg CO₂",
  recyclability: "100% Biodegradable",
  image: "https://i.pinimg.com/1200x/fd/71/e5/fd71e57b5545e936425c6399902988a2.jpg",
  category: "Clothing",
},
{
  id: 16,
  name: "Recycled Polyester Shirt",
  price: 1200,
  ecoScore: 82,
  carbonFootprint: "2.0 kg CO₂",
  recyclability: "Recyclable",
  image: "https://i.pinimg.com/1200x/74/f6/0b/74f60bb8a4bb9710732dacaa5dd5fbdc.jpg",
  category: "Clothing",
},
{
  id: 17,
  name: "Cork Plant Pot",
  price: 399,
  ecoScore: 92,
  carbonFootprint: "0.5 kg CO₂",
  recyclability: "Biodegradable",
  image: "https://i.pinimg.com/736x/b6/1b/23/b61b23bc69e43f06bc1b6c35acd0c84d.jpg",
  category: "Home & Garden",
},
{
  id: 18,
  name: "Wooden Plant Pot",
  price: 799,
  ecoScore: 88,
  carbonFootprint: "1.0 kg CO₂",
  recyclability: "Reusable",
  image: "https://i.pinimg.com/1200x/1c/3c/fe/1c3cfea0d123799752f7e0bc856f03e7.jpg",
  category: "Home & Garden",
},
{
  id: 19,
  name: "Moss Fiber Plant Pot",
  price: 299,
  ecoScore: 95,
  carbonFootprint: "0.3 kg CO₂",
  recyclability: "100% Compostable",
  image: "https://i.pinimg.com/736x/af/9a/49/af9a49d249b9c37264db26a163b08200.jpg",
  category: "Home & Garden",
},
{
  id: 20,
  name: "Wooden Food Container",
  price: 899,
  ecoScore: 88,
  carbonFootprint: "1.2 kg CO₂",
  recyclability: "Reusable & Biodegradable",
  image: "https://i.pinimg.com/1200x/c6/90/b2/c690b2774a402f0a9958775d1bd0902e.jpg",
  category: "Kitchen",
},
{
  id: 21,
  name: "Sugarcane Bagasse Container",
  price: 299,
  ecoScore: 95,
  carbonFootprint: "0.4 kg CO₂",
  recyclability: "100% Compostable",
  image: "https://i.pinimg.com/1200x/7d/5c/41/7d5c415d0d3096ea87b8a298063bb3e3.jpg",
  category: "Kitchen",
},
{
  id: 22,
  name: "Glass Food Container",
  price: 499,
  ecoScore: 92,
  carbonFootprint: "0.8 kg CO₂",
  recyclability: "100% Recyclable",
  image: "https://i.pinimg.com/1200x/73/43/41/7343411dcd24952f9e04103087667b86.jpg",
  category: "Kitchen",
},
{
  id: 23,
  name: "Stainless Steel Food Container",
  price: 699,
  ecoScore: 94,
  carbonFootprint: "0.7 kg CO₂",
  recyclability: "100% Recyclable & Reusable",
  image: "https://i.pinimg.com/736x/08/bc/fe/08bcfe217e51695a62a108237f34ee15.jpg",
  category: "Kitchen",
},
{
  id: 24,
  name: "Organic Cotton Pants",
  price: 1299,
  ecoScore: 91,
  carbonFootprint: "1.4 kg CO₂",
  recyclability: "Biodegradable",
  image: "https://i.pinimg.com/736x/5e/3e/58/5e3e58af1d2635b328d6394e2ffaa339.jpg",
  category: "Clothing",
},
{
  id: 25,
  name: "Hemp Trousers",
  price: 1899,
  ecoScore: 94,
  carbonFootprint: "1.1 kg CO₂",
  recyclability: "100% Biodegradable",
  image: "https://i.pinimg.com/1200x/1c/56/92/1c5692ef792bf429107172cc5d839e74.jpg",
  category: "Clothing",
},
{
  id: 26,
  name: "Recycled Denim Jeans",
  price: 1599,
  ecoScore: 88,
  carbonFootprint: "2.2 kg CO₂",
  recyclability: "Recyclable",
  image: "https://i.pinimg.com/736x/ca/1e/69/ca1e69bf867bdd0dd4e115788244d0d4.jpg",
  category: "Clothing",
}

];

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
        <p class="card-price">₹${product.price.toLocaleString()}</p>
        <p class="eco-score-label">Eco Score</p>
        <div class="eco-score-row">
          <div class="eco-bar-track">
            <div class="eco-bar-fill" data-score="${product.ecoScore}"></div>
          </div>
          <span class="eco-score-value">${product.ecoScore}%</span>
        </div>
        <button class="compare-btn ${isSelected ? "selected" : ""}" data-id="${product.id}">
          ${isSelected ? "✓ Added to Compare" : "+ Compare"}
        </button>
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
        <p class="card-price">₹${product.price.toLocaleString()}</p>

        <p class="eco-score-label">Eco Score</p>
        <div class="eco-score-row">
          <div class="eco-bar-track">
            <div class="eco-bar-fill" data-score="${product.ecoScore}"></div>
          </div>
          <span class="eco-score-value">${product.ecoScore}%</span>
        </div>

        <button class="compare-btn ${isSelected ? "selected" : ""}" data-id="${product.id}">
          ${isSelected ? "✓ Added to Compare" : "+ Compare"}
        </button>
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
      { label: "💲 Price", getValue: (p) => `₹${p.price.toLocaleString()}` },
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
    renderProducts();
    handleScrollAnimations();
  });
} else {
  renderProducts();
  handleScrollAnimations();
}

window.addEventListener("scroll", handleScrollAnimations);
