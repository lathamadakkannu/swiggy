// Mock Data
const categories = [
    { id: 1, name: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=200" },
    { id: 2, name: "Pizza & Burgers", image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=200&q=80" },
    { id: 3, name: "Chinese", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=200" },
    { id: 4, name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200" },
    { id: 5, name: "Healthy", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200" },
    { id: 6, name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=200" },
    { id: 7, name: "South Indian", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=200" }
];

const restaurants = [
    // Bangalore Restaurants
    {
        id: 1,
        name: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        rating: 4.2,
        deliveryTime: "30-35 mins",
        cuisines: "Pizzas, Fast Food",
        location: "Bangalore",
        veg: false,
        price: 400,
        offers: true
    },
    {
        id: 2,
        name: "Biryani Blues",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "25-30 mins",
        cuisines: "Biryani, Hyderabadi",
        location: "Bangalore",
        veg: false,
        price: 350,
        offers: true
    },
    {
        id: 3,
        name: "Green Salad Co.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        rating: 4.8,
        deliveryTime: "15-20 mins",
        cuisines: "Healthy, Salads",
        location: "Bangalore",
        veg: true,
        price: 250,
        offers: false
    },
    {
        id: 4,
        name: "Cafe Coffee Day",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
        rating: 4.1,
        deliveryTime: "20-25 mins",
        cuisines: "Beverages, Desserts",
        location: "Bangalore",
        veg: true,
        price: 200,
        offers: true
    },
    {
        id: 5,
        name: "Empire Restaurant",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "35-40 mins",
        cuisines: "North Indian, Mughlai, Chinese",
        location: "Bangalore",
        veg: false,
        price: 500,
        offers: true
    },
    {
        id: 6,
        name: "MTR - Mavalli Tiffin Room",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600",
        rating: 4.7,
        deliveryTime: "25-30 mins",
        cuisines: "South Indian, Vegetarian",
        location: "Bangalore",
        veg: true,
        price: 280,
        offers: false
    },
    {
        id: 7,
        name: "Sweet Treats",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "20-25 mins",
        cuisines: "Desserts, Cakes",
        location: "Bangalore",
        veg: true,
        price: 250,
        offers: false
    },
    {
        id: 8,
        name: "Meghana Foods",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "40-45 mins",
        cuisines: "Biryani, Andhra, Chinese",
        location: "Bangalore",
        veg: false,
        price: 380,
        offers: true
    },
    {
        id: 9,
        name: "The Bowl Company",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        rating: 4.2,
        deliveryTime: "25-30 mins",
        cuisines: "Bowls, Healthy, Asian",
        location: "Bangalore",
        veg: true,
        price: 320,
        offers: false
    },

    // Mumbai Restaurants
    {
        id: 10,
        name: "The Burger Club",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        rating: 4.0,
        deliveryTime: "35-40 mins",
        cuisines: "Burgers, Beverages",
        location: "Mumbai",
        veg: false,
        price: 300,
        offers: true
    },
    {
        id: 11,
        name: "Mumbai Darbar",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "30-35 mins",
        cuisines: "Mughlai, North Indian",
        location: "Mumbai",
        veg: false,
        price: 450,
        offers: true
    },
    {
        id: 12,
        name: "Leopold Cafe",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "35-40 mins",
        cuisines: "Continental, Fast Food",
        location: "Mumbai",
        veg: false,
        price: 550,
        offers: false
    },
    {
        id: 13,
        name: "Shree Thaker Bhojanalay",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "25-30 mins",
        cuisines: "Gujarati, Thali, Vegetarian",
        location: "Mumbai",
        veg: true,
        price: 350,
        offers: true
    },
    {
        id: 14,
        name: "Bademiya",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "30-35 mins",
        cuisines: "Rolls, Kebabs, Mughlai",
        location: "Mumbai",
        veg: false,
        price: 400,
        offers: true
    },
    {
        id: 15,
        name: "Cafe Madras",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "20-25 mins",
        cuisines: "South Indian, Filter Coffee",
        location: "Mumbai",
        veg: true,
        price: 220,
        offers: false
    },

    // Delhi Restaurants
    {
        id: 16,
        name: "Royal Treat",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "40-45 mins",
        cuisines: "North Indian, Thali",
        location: "Delhi",
        veg: true,
        price: 320,
        offers: false
    },
    {
        id: 17,
        name: "Delhi Chaat Corner",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "20-25 mins",
        cuisines: "Chaat, Street Food",
        location: "Delhi",
        veg: true,
        price: 180,
        offers: false
    },
    {
        id: 18,
        name: "Karim's",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.7,
        deliveryTime: "35-40 mins",
        cuisines: "Mughlai, Kebabs, Non-Veg",
        location: "Delhi",
        veg: false,
        price: 500,
        offers: true
    },
    {
        id: 19,
        name: "Saravana Bhavan",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "25-30 mins",
        cuisines: "South Indian, Vegetarian",
        location: "Delhi",
        veg: true,
        price: 250,
        offers: false
    },
    {
        id: 20,
        name: "KFC",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600",
        rating: 4.0,
        deliveryTime: "30-35 mins",
        cuisines: "Fried Chicken, Fast Food",
        location: "Delhi",
        veg: false,
        price: 350,
        offers: true
    },
    {
        id: 21,
        name: "Haldiram's",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "25-30 mins",
        cuisines: "North Indian, Sweets, Snacks",
        location: "Delhi",
        veg: true,
        price: 280,
        offers: true
    },

    // Hyderabad Restaurants
    {
        id: 22,
        name: "Paradise Biryani",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600",
        rating: 4.8,
        deliveryTime: "30-35 mins",
        cuisines: "Biryani, Hyderabadi",
        location: "Hyderabad",
        veg: false,
        price: 420,
        offers: true
    },
    {
        id: 23,
        name: "Bawarchi",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "35-40 mins",
        cuisines: "Biryani, Andhra",
        location: "Hyderabad",
        veg: false,
        price: 380,
        offers: true
    },
    {
        id: 24,
        name: "Chutneys",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "20-25 mins",
        cuisines: "South Indian, Breakfast",
        location: "Hyderabad",
        veg: true,
        price: 220,
        offers: false
    },

    // Pune Restaurants
    {
        id: 25,
        name: "Vaishali",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "20-25 mins",
        cuisines: "South Indian, Fast Food",
        location: "Pune",
        veg: true,
        price: 200,
        offers: false
    },
    {
        id: 26,
        name: "George Restaurant",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "30-35 mins",
        cuisines: "Burgers, Sandwiches, Fast Food",
        location: "Pune",
        veg: false,
        price: 350,
        offers: true
    },
    {
        id: 27,
        name: "Shabree",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "25-30 mins",
        cuisines: "North Indian, Mughlai",
        location: "Pune",
        veg: false,
        price: 400,
        offers: true
    },

    // Chennai Restaurants
    {
        id: 28,
        name: "Murugan Idli Shop",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "15-20 mins",
        cuisines: "South Indian, Idli, Dosa",
        location: "Chennai",
        veg: true,
        price: 150,
        offers: false
    },
    {
        id: 29,
        name: "Anjappar",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "30-35 mins",
        cuisines: "Chettinad, Seafood, Non-Veg",
        location: "Chennai",
        veg: false,
        price: 450,
        offers: true
    },
    {
        id: 30,
        name: "Ponnusamy Hotel",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "35-40 mins",
        cuisines: "Non-Veg, Biryani, Andhra",
        location: "Chennai",
        veg: false,
        price: 380,
        offers: true
    },

    // Kolkata Restaurants
    {
        id: 31,
        name: "Peter Cat",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        deliveryTime: "30-35 mins",
        cuisines: "Continental, Kebabs, Bengali",
        location: "Kolkata",
        veg: false,
        price: 550,
        offers: true
    },
    {
        id: 32,
        name: "Kusum Snacks",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "15-20 mins",
        cuisines: "Street Food, Chaat, Sweets",
        location: "Kolkata",
        veg: true,
        price: 120,
        offers: false
    },
    {
        id: 33,
        name: "Oh! Calcutta",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "35-40 mins",
        cuisines: "Bengali, Seafood",
        location: "Kolkata",
        veg: false,
        price: 600,
        offers: true
    },
    {
        id: 34,
        name: "Dessert Delight",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        deliveryTime: "25-30 mins",
        cuisines: "Ice Cream, Desserts",
        location: "Bangalore",
        veg: true,
        price: 200,
        offers: true
    },
    {
        id: 35,
        name: "Pizza Corner",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        deliveryTime: "30-35 mins",
        cuisines: "Pizza, Italian",
        location: "Bangalore",
        veg: true,
        price: 400,
        offers: true
    },
    {
        id: 36,
        name: "Burger Hub",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "25-30 mins",
        cuisines: "Burgers, Fast Food",
        location: "Bangalore",
        veg: false,
        price: 300,
        offers: true
    },
];

// State
let cart = JSON.parse(localStorage.getItem('swiggy-cart')) || [];
let currentFilter = "all";
let currentSearchQuery = "";
let currentLocation = "Bangalore";

// DOM Elements
let header, categoryGrid, restaurantGrid, searchInput, searchBtn, menuToggle, cartBadge, filterBtns, cartItemsContainer, cartFooter;

// Initialize
function init() {
    header = document.getElementById('header');
    categoryGrid = document.getElementById('categoryGrid');
    restaurantGrid = document.getElementById('restaurantGrid');
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    menuToggle = document.getElementById('menuToggle');
    cartBadge = document.querySelector('.cart-count');
    filterBtns = document.querySelectorAll('.filter-btn');
    cartItemsContainer = document.getElementById('cartItemsContainer');
    cartFooter = document.querySelector('.drawer-footer');

    renderCategories();
    renderRestaurants();
    renderCart();
    setupEventListeners();
    setupLocationSelector();
    setupCategoryFilters();
    setupHelpPage();
}

// Render Functions
function renderCategories() {
    if (!categoryGrid) return;
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category-name="${cat.name}">
            <div class="category-img-wrapper">
                <img src="${cat.image}" alt="${cat.name}">
            </div>
            <p class="category-name">${cat.name}</p>
        </div>
    `).join('');
}

function getFilteredRestaurants() {
    let filtered = restaurants.filter(r =>
        r.location.toLowerCase().includes(currentLocation.toLowerCase())
    );

    // Only apply search filter if search query is not empty
   if (currentSearchQuery.trim() !== "") {
    const keywords = currentSearchQuery
        .toLowerCase()
        .split("&") // split "Pizza & Burgers"
        .map(k => k.trim());

    filtered = filtered.filter(r =>
        keywords.some(keyword =>
            r.name.toLowerCase().includes(keyword) ||
            r.cuisines.toLowerCase().includes(keyword)
        )
    );
}

    // Apply other filters
    if (currentFilter === "fast-delivery") {
        filtered.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
    } else if (currentFilter === "top-rated") {
        filtered = filtered.filter(r => r.rating >= 4.5);
    } else if (currentFilter === "veg") {
        filtered = filtered.filter(r => r.veg === true);
    } else if (currentFilter === "offers") {
        filtered = filtered.filter(r => r.offers === true);
    } else if (currentFilter === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
}

function renderRestaurants() {
    if (!restaurantGrid) return;
    const filtered = getFilteredRestaurants();

    if (filtered.length === 0) {
        restaurantGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No restaurants found matching your criteria in ${currentLocation}.</p>`;
        return;
    }

    restaurantGrid.innerHTML = filtered.map(res => `
        <div class="restaurant-card" data-res-id="${res.id}">
            <div class="res-img-wrapper">
                <img src="${res.image}" alt="${res.name}">
                ${res.offers ? '<div class="res-overlay">60% OFF UPTO ₹120</div>' : ''}
            </div>
            <div class="res-info">
                <h3 class="res-name">${res.name}</h3>
                <div class="res-rating-info">
                    <div class="res-rating">
                        <i class="ph-fill ph-star"></i>
                        <span>${res.rating}</span>
                    </div>
                    <span>•</span>
                    <span>${res.deliveryTime}</span>
                </div>
                <p class="res-cuisines">${res.cuisines}</p>
                <p class="res-loc">${res.location}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${res.id})" style="margin-top: 10px; color: var(--primary-color); font-weight: 700; font-size: 14px; text-transform: uppercase;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Cart Functions
window.addToCart = function (resId) {
    const restaurant = restaurants.find(r => r.id === resId);
    if (!restaurant) return;

    const existingItem = cart.find(item => item.id === resId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: restaurant.id,
            name: restaurant.name,
            price: restaurant.price,
            image: restaurant.image,
            quantity: 1
        });
    }

    saveAndRenderCart();
    showToast(`${restaurant.name} added to cart!`);
};

window.updateQuantity = function (id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeItem(id);
    } else {
        saveAndRenderCart();
    }
};

window.removeItem = function (id) {
    cart = cart.filter(item => item.id !== id);
    saveAndRenderCart();
};

function saveAndRenderCart() {
    localStorage.setItem('swiggy-cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.innerText = totalItems;

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <span>Good food is always cooking! Go ahead, order some yummy items from the menu.</span>
                </div>
            `;
        }
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }

    if (cartFooter) cartFooter.style.display = 'block';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let cartHtml = `<div class="cart-items-list">`;
    cartHtml += cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">₹${item.price}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <i class="ph ph-trash remove-item" onclick="removeItem(${item.id})"></i>
        </div>
    `).join('');
    cartHtml += `</div>`;

    cartItemsContainer.innerHTML = cartHtml;

    if (cartFooter) {
        cartFooter.innerHTML = `
            <div class="cart-summary">
                <span class="summary-title">Subtotal</span>
                <span class="summary-total">₹${subtotal}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Checkout</button>
        `;
    }
}

window.checkout = function () {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Order placed successfully! Total: ₹${total}\nThank you for ordering with Swiggy!`);
    cart = [];
    saveAndRenderCart();
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
};

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary-color);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        animation: fadeInOut 2s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Location Selector
function setupLocationSelector() {
    const locationSelector = document.getElementById('locationSelector');
    const locationDropdown = document.getElementById('locationDropdown');
    const locationList = document.getElementById('locationList');
    const selectedLocationSpan = document.getElementById('selectedLocation');

    if (!locationSelector) return;

    locationSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        locationDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!locationSelector.contains(e.target)) {
            locationDropdown.classList.remove('active');
        }
    });

    const locationItems = locationList.querySelectorAll('li');
    locationItems.forEach(item => {
        item.addEventListener('click', () => {
            const location = item.getAttribute('data-location');
            currentLocation = location;
            selectedLocationSpan.textContent = location;
            locationDropdown.classList.remove('active');
            renderRestaurants();

            const restaurantsSection = document.getElementById('restaurantsSection');
            if (restaurantsSection) {
                restaurantsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Category Filter - What's on your mind?
function setupCategoryFilters() {
    if (!categoryGrid) return;

    categoryGrid.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const categoryName = categoryCard.querySelector('.category-name')?.textContent || '';
            if (searchInput) {
                searchInput.value = categoryName;
                currentSearchQuery = categoryName;
                renderRestaurants();

                const restaurantsSection = document.getElementById('restaurantsSection');
                if (restaurantsSection) {
                    restaurantsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

// Event Listeners
function setupEventListeners() {
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // Search functionality - FIXED: Now updates when input is cleared
    const updateSearch = () => {
        if (searchInput) {
            currentSearchQuery = searchInput.value;
            renderRestaurants();

            const restaurantsSection = document.getElementById('restaurantsSection');
            if (restaurantsSection) {
                restaurantsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', updateSearch);
    }

    // Enter key press
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') updateSearch();
        });

        // IMPORTANT: Listen for input event to handle clearing the search box
        searchInput.addEventListener('input', function () {
            // When input becomes empty, reset search query and show all restaurants
            if (this.value === "") {
                currentSearchQuery = "";
                renderRestaurants();
            }
        });
    }

    // Auth Modal
    const signInLink = document.getElementById('signInLink');
    const authLinkText = document.getElementById('authLinkText');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const authForm = document.getElementById('authForm');
    const userNameInput = document.getElementById('userName');

    if (signInLink && authModal) {
        signInLink.addEventListener('click', (e) => {
            e.preventDefault();
            authModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
    }

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = userNameInput?.value.trim();
            if (name) {
                if (authLinkText) {
                    authLinkText.innerText = name.length > 10 ? name.substring(0, 10) + '...' : name;
                }
                authModal.style.display = 'none';
                showToast(`Welcome, ${name}!`);
                authForm.reset();
            }
        });
    }

    // Cart Drawer
    const cartToggle = document.getElementById('cartToggle');
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    const closeCart = document.getElementById('closeCart');

    if (cartToggle) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'block';
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
        if (e.target === cartDrawerOverlay) {
            cartDrawerOverlay.style.display = 'none';
        }
    });

    // Filter Buttons
    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter');
                renderRestaurants();
            });
        });
    }

    // Menu Toggle for mobile
    if (menuToggle) {
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            if (navLinks) {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '80px';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'white';
                    navLinks.style.padding = '20px';
                    navLinks.style.boxShadow = 'var(--shadow-md)';
                    navLinks.style.zIndex = '999';
                }
            }
        });
    }
}

// Help Page FAQ
function setupHelpPage() {
    const faqData = {
        orders: [
            { question: "What is Swiggy One?", answer: "Swiggy One is a membership program that offers unlimited free delivery on thousands of restaurants and other benefits like priority support and exclusive discounts." },
            { question: "I want an invoice for my order", answer: "You can find the invoice in the 'My Orders' section under the specific order details. Click on the order and select 'Download Invoice'." },
            { question: "How can I edit my order?", answer: "Orders cannot be edited once placed. However, you can cancel within 60 seconds and place a new order. Look for the 'Cancel' button in the order tracking screen." },
            { question: "My payment was debited but order not placed", answer: "Don't worry, the amount will be automatically refunded to your original payment method within 5-7 business days. Please contact support if not received." },
            { question: "How do I track my order?", answer: "You can track your order in real-time from the 'My Orders' section. Click on the active order to see the live location of your delivery partner." }
        ],
        general: [
            { question: "How do I change my delivery address?", answer: "You can change your delivery address from the app/site by going to Profile > Saved Addresses. Add a new address or edit an existing one." },
            { question: "What payment methods are accepted?", answer: "We accept all major credit/debit cards, net banking, UPI (Google Pay, PhonePe, etc.), and cash on delivery." },
            { question: "How to apply a coupon code?", answer: "You can apply coupon codes at checkout. Look for the 'Apply Coupon' section, enter your code, and click 'Apply'." },
            { question: "What is the cancellation policy?", answer: "Orders can be cancelled within 60 seconds of placing them. After that, cancellation may incur a small fee depending on the restaurant's policy." },
            { question: "How do I report an issue with my order?", answer: "Go to 'My Orders', select the problematic order, and click on 'Report an Issue'. Choose the issue type and submit." }
        ],
        legal: [
            { question: "What is your refund policy?", answer: "Refunds are processed within 5-7 business days to the original payment method. For cash on delivery orders, refunds are credited as Swiggy credits." },
            { question: "How is my data protected?", answer: "We take data privacy seriously. All personal information is encrypted and we comply with data protection regulations. Read our full privacy policy for details." },
            { question: "What are the terms for Swiggy One membership?", answer: "Swiggy One is a subscription service that auto-renews monthly/yearly. You can cancel anytime from your account settings." },
            { question: "Who is liable for incorrect orders?", answer: "If you receive an incorrect or incomplete order, please report within 2 hours. We'll review and provide a refund or credit based on the issue." },
            { question: "What is your dispute resolution process?", answer: "For any disputes, contact our customer support first. Unresolved issues can be escalated to our grievance officer as per our terms of service." }
        ]
    };

    function loadFAQs(tab) {
        const faqContainer = document.getElementById('faqContent');
        if (!faqContainer) return;

        let data;
        if (tab === 'orders') data = faqData.orders;
        else if (tab === 'general') data = faqData.general;
        else data = faqData.legal;

        faqContainer.innerHTML = data.map(faq => `
            <div class="faq-item">
                <h3>${faq.question}</h3>
                <p>${faq.answer}</p>
            </div>
        `).join('');
    }

    const sidebarItems = document.querySelectorAll('.help-sidebar ul li');
    if (sidebarItems.length) {
        loadFAQs('orders');

        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const tab = item.getAttribute('data-tab');
                loadFAQs(tab);
            });
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);