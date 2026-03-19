# EcoCompare - Sustainable Product Comparator

EcoCompare is a front-end web project that helps users discover and compare eco-friendly products side by side.
It focuses on making sustainable shopping decisions easier by highlighting key product metrics such as eco score, carbon footprint, recyclability, and price.

## Features

- Clean landing page with hero section and sustainability-focused messaging
- Search products by name or category
- Category-based filtering (All, Clothing, Electronics, Kitchen, Bags, Drinkware)
- Product cards with image, category, price, and eco score bar
- Compare selected products in a side-by-side comparison table
- Remove products from comparison directly in the comparison table
- Responsive navigation with mobile menu toggle
- Scroll-based fade-in animations for sections

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive layout, animations)
- Vanilla JavaScript (DOM rendering and interactions)

## Project Structure

- index.html - App layout and sections (navbar, hero, products, compare, about, footer)
- style.css - Complete styling, responsive behavior, and UI animations
- script.js - Product data, rendering logic, search/filter, compare table, and interactions

## How to Run

This is a static project, so no build step is required.

1. Open the project folder.
2. Open index.html in a browser.

Optional (recommended): use VS Code Live Server for auto-reload during development.

## Core Functionality

### 1) Product Listing
Products are rendered dynamically from a JavaScript array and displayed as cards in a grid.

### 2) Search
Typing in the search box filters products by:
- Product name
- Product category

### 3) Category Filter
Category buttons show products from a selected category or all products.

### 4) Product Comparison
Users can add products to compare.
When at least two products are selected, a comparison table appears with:
- Price
- Eco score
- Carbon footprint
- Recyclability

### 5) Mobile-Friendly Navigation
A compact menu is available on smaller screens.

## Future Improvements

- Add sorting options (price, eco score, carbon footprint)
- Persist selected compare items using localStorage
- Add dedicated product detail modal/page
- Add accessibility enhancements (keyboard focus states, ARIA improvements)
- Replace static product data with API or JSON source

## License

This project is for academic and learning purposes.
