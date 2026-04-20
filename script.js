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
    {
        id: 1,
        name: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        rating: 4.2,
        deliveryTime: "30-35 mins",
        cuisines: "Pizzas, Fast Food",
        location: "Koramangala",
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
        location: "Indiranagar",
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
        location: "HSR Layout",
        veg: true,
        price: 250,
        offers: false
    },
    {
        id: 4,
        name: "The Burger Club",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        rating: 4.0,
        deliveryTime: "35-40 mins",
        cuisines: "Burgers, Beverages",
        location: "Whitefield",
        veg: false,
        price: 300,
        offers: true
    },
    {
        id: 5,
        name: "Royal Treat",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        deliveryTime: "40-45 mins",
        cuisines: "North Indian, Thali",
        location: "JP Nagar",
        veg: true,
        price: 320,
        offers: false
    },
    {
        id: 6,
        name: "Cafe Coffee Day",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
        rating: 4.1,
        deliveryTime: "20-25 mins",
        cuisines: "Beverages, Desserts",
        location: "Malleshwaram",
        veg: true,
        price: 200,
        offers: true
    }
];

// State
let cart = JSON.parse(localStorage.getItem('swiggy-cart')) || [];
let filteredRestaurants = [...restaurants];

// DOM Elements
const header = document.getElementById('header');
const categoryGrid = document.getElementById('categoryGrid');
const restaurantGrid = document.getElementById('restaurantGrid');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const cartBadge = document.querySelector('.cart-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartItemsContainer = document.getElementById('cartItemsContainer');

// Initialize
function init() {
    renderCategories();
    renderRestaurants(restaurants);
    renderCart();
    setupEventListeners();
    setupLocationSelector();
}

// Render Functions
function renderCategories() {
    if (!categoryGrid) return;
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card">
            <div class="category-img-wrapper">
                <img src="${cat.image}" alt="${cat.name}">
            </div>
            <p class="category-name">${cat.name}</p>
        </div>
    `).join('');
}

function renderRestaurants(data) {
    if (!restaurantGrid) return;
    if (data.length === 0) {
        restaurantGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No restaurants found matching your criteria.</p>`;
        return;
    }

    restaurantGrid.innerHTML = data.map(res => `
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
                <button class="add-to-cart" onclick="addToCart(event, ${res.id})" style="margin-top: 10px; color: var(--primary-color); font-weight: 700; font-size: 14px; text-transform: uppercase;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Cart Logic
window.addToCart = function (event, resId) {
    if (event) event.stopPropagation();

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

    // Feedback
    const btn = event?.target;
    if (btn) {
        const originalText = btn.innerText;
        btn.innerText = "Added!";
        btn.style.color = "var(--success)";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.color = "var(--primary-color)";
        }, 1000);
    }
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
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.innerText = totalItems;

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <span>Good food is always cooking! Go ahead, order some yummy items from the menu.</span>
            </div>
        `;
        const drawerFooter = document.querySelector('.drawer-footer');
        if (drawerFooter) drawerFooter.style.display = 'none';
        return;
    }

    const drawerFooter = document.querySelector('.drawer-footer');
    if (drawerFooter) drawerFooter.style.display = 'block';

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

    // Update summary
    const drawerFooterInner = document.querySelector('.drawer-footer');
    if (drawerFooterInner) {
        drawerFooterInner.innerHTML = `
            <div class="cart-summary">
                <span class="summary-title">Subtotal</span>
                <span class="summary-total">₹${subtotal}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Checkout</button>
        `;
    }
}

window.checkout = function () {
    alert("Order placed successfully! Total: ₹" + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0));
    cart = [];
    saveAndRenderCart();
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
};

// Location Selector
function setupLocationSelector() {
    const locationSelector = document.getElementById('locationSelector');
    const locationDropdown = document.getElementById('locationDropdown');
    const locationSearch = document.getElementById('locationSearch');
    const locationList = document.getElementById('locationList');
    const selectedLocationSpan = document.getElementById('selectedLocation');

    if (!locationSelector) return;

    // Toggle dropdown
    locationSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        locationDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!locationSelector.contains(e.target)) {
            locationDropdown.classList.remove('active');
        }
    });

    // Search functionality
    if (locationSearch) {
        locationSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = locationList.querySelectorAll('li');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Select location
    const locationItems = locationList.querySelectorAll('li');
    locationItems.forEach(item => {
        item.addEventListener('click', () => {
            const location = item.getAttribute('data-location');
            selectedLocationSpan.textContent = location;
            locationDropdown.classList.remove('active');
            if (locationSearch) locationSearch.value = '';
            // Reset visibility
            locationItems.forEach(i => i.style.display = 'block');
        });
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

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = restaurants.filter(res =>
                res.name.toLowerCase().includes(query) ||
                res.cuisines.toLowerCase().includes(query)
            );
            renderRestaurants(filtered);
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
                alert(`Welcome, ${name}!`);
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
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterType = btn.getAttribute('data-filter');
            applyFilters(filterType);
        });
    });

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

function applyFilters(type) {
    let result = [...restaurants];
    switch (type) {
        case 'fast-delivery':
            result = result.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
            break;
        case 'top-rated':
            result = result.filter(res => res.rating >= 4.5);
            break;
        case 'veg':
            result = result.filter(res => res.veg);
            break;
        case 'offers':
            result = result.filter(res => res.offers);
            break;
        case 'price-low':
            result = result.sort((a, b) => a.price - b.price);
            break;
        default:
            result = [...restaurants];
    }
    renderRestaurants(result);
}

// Run Init
init();