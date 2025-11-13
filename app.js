// ===== PROPERTY DATA =====
const defaultProperties = [
    {
        id: 1,
        title: "3-Bedroom Bungalow in Dallas Estate",
        type: "house",
        category: "buy",
        price: 4500000,
        location: "Dallas Estate, Embu",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        description: "Beautiful modern bungalow in the prestigious Dallas Estate. Features spacious rooms, modern kitchen, and a well-maintained garden. Perfect for families looking for a peaceful neighborhood.",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
        ],
        features: ["Parking", "Garden", "Security", "Water Tank", "Modern Kitchen"]
    },
    {
        id: 2,
        title: "2-Bedroom Apartment in Embu Town",
        type: "apartment",
        category: "rent",
        price: 25000,
        location: "Embu Town Center",
        bedrooms: 2,
        bathrooms: 1,
        area: 900,
        description: "Cozy apartment located in the heart of Embu town. Close to shopping centers, schools, and hospitals. Ideal for young professionals and small families.",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
        ],
        features: ["Parking", "Security", "Water Supply", "Balcony"]
    },
    {
        id: 3,
        title: "1/4 Acre Land in Kangaru",
        type: "land",
        category: "buy",
        price: 1200000,
        location: "Kangaru, Embu",
        area: 10890,
        description: "Prime residential land in Kangaru area. Ready title deed, accessible via all-weather road. Ideal for residential development with all utilities nearby.",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
        ],
        features: ["Title Deed", "Road Access", "Electricity Nearby", "Water Connection Available"]
    },
    {
        id: 4,
        title: "4-Bedroom Maisonette in Kairuri",
        type: "house",
        category: "buy",
        price: 6800000,
        location: "Kairuri Estate, Embu",
        bedrooms: 4,
        bathrooms: 3,
        area: 2400,
        description: "Luxurious maisonette with modern finishes. Master ensuite, spacious living areas, and a beautiful compound. Located in a serene and secure neighborhood.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
        ],
        features: ["Master Ensuite", "Parking", "Garden", "Security", "Modern Kitchen", "Balcony"]
    },
    {
        id: 5,
        title: "Bedsitter in Embu University Area",
        type: "apartment",
        category: "rent",
        price: 8000,
        location: "Near Embu University",
        bedrooms: 1,
        bathrooms: 1,
        area: 350,
        description: "Affordable bedsitter perfect for students and young professionals. Close to Embu University with easy access to public transport.",
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
        ],
        features: ["Water Supply", "Security", "Affordable"]
    },
    {
        id: 6,
        title: "Commercial Plot in Embu CBD",
        type: "commercial",
        category: "buy",
        price: 8500000,
        location: "Embu Central Business District",
        area: 5000,
        description: "Prime commercial plot in Embu CBD. Perfect for retail, office, or mixed-use development. High foot traffic area with excellent visibility.",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
        ],
        features: ["Title Deed", "CBD Location", "High Traffic", "All Utilities Available"]
    },
    {
        id: 7,
        title: "3-Bedroom House in Kigari",
        type: "house",
        category: "rent",
        price: 35000,
        location: "Kigari, Embu",
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        description: "Spacious family home in quiet Kigari neighborhood. Well-maintained with a large compound and ample parking space.",
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
        ],
        features: ["Parking", "Garden", "Security", "Water Tank", "Spacious Compound"]
    },
    {
        id: 8,
        title: "1-Bedroom Apartment in Manyatta",
        type: "apartment",
        category: "rent",
        price: 15000,
        location: "Manyatta Estate, Embu",
        bedrooms: 1,
        bathrooms: 1,
        area: 600,
        description: "Modern 1-bedroom apartment in Manyatta. Features include fitted kitchen, balcony, and secure parking. Close to amenities.",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        features: ["Parking", "Security", "Balcony", "Modern Kitchen", "Water Supply"]
    },
    {
        id: 9,
        title: "5-Bedroom Villa in Runyenjes",
        type: "house",
        category: "buy",
        price: 12000000,
        location: "Runyenjes, Embu",
        bedrooms: 5,
        bathrooms: 4,
        area: 3500,
        description: "Luxurious villa with stunning views. Features include swimming pool, landscaped garden, and high-end finishes throughout. Perfect for luxury living.",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
        ],
        features: ["Swimming Pool", "Master Ensuite", "Parking", "Garden", "Security", "Modern Kitchen", "Balcony", "Gym"]
    },
    {
        id: 10,
        title: "1/2 Acre Agricultural Land in Siakago",
        type: "land",
        category: "buy",
        price: 800000,
        location: "Siakago, Embu",
        area: 21780,
        description: "Fertile agricultural land suitable for farming. Good soil, water access, and accessible via murram road. Ideal for crop farming or mixed farming.",
        images: [
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
        ],
        features: ["Title Deed", "Water Access", "Fertile Soil", "Road Access"]
    }
];

// Initialize properties from localStorage or use defaults
let properties = JSON.parse(localStorage.getItem('properties')) || defaultProperties;

// Save properties to localStorage
function saveProperties() {
    localStorage.setItem('properties', JSON.stringify(properties));
}

// If no properties in localStorage, save defaults
if (!localStorage.getItem('properties')) {
    saveProperties();
}

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return `KES ${price.toLocaleString()}`;
}

function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.onclick = () => viewProperty(property.id);

    const priceLabel = property.category === 'rent' ? '/month' : '';
    const badgeClass = property.category === 'rent' ? 'badge-rent' : 'badge-buy';
    const badgeText = property.category === 'rent' ? 'For Rent' : 'For Sale';

    card.innerHTML = `
        <div style="position: relative;">
            <img src="${property.images[0]}" alt="${property.title}" class="property-image">
            <span class="property-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="property-content">
            <div class="property-type">${property.type}</div>
            <h3 class="property-title">${property.title}</h3>
            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i>
                ${property.location}
            </div>
            ${property.bedrooms ? `
                <div class="property-specs">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area} sqft</span>
                </div>
            ` : `
                <div class="property-specs">
                    <span><i class="fas fa-ruler-combined"></i> ${property.area} sqft</span>
                </div>
            `}
            <div class="property-price">${formatPrice(property.price)}${priceLabel}</div>
        </div>
    `;

    return card;
}

function viewProperty(id) {
    window.location.href = `property-details.html?id=${id}`;
}

// ===== FILTERING AND SEARCH =====
function filterProperties() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const typeFilter = document.getElementById('typeFilter');
    const sortPrice = document.getElementById('sortPrice');

    let filtered = [...properties];

    // Filter by page type (rent/buy pages)
    if (window.pageType) {
        filtered = filtered.filter(p => p.category === window.pageType);
    }

    // Filter by search input
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchTerm) ||
            p.location.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // Filter by category
    if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    // Filter by type
    if (typeFilter && typeFilter.value !== 'all') {
        filtered = filtered.filter(p => p.type === typeFilter.value);
    }

    // Sort by price
    if (sortPrice && sortPrice.value !== 'default') {
        if (sortPrice.value === 'low-high') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortPrice.value === 'high-low') {
            filtered.sort((a, b) => b.price - a.price);
        }
    }

    displayProperties(filtered);
}

function displayProperties(propertiesToDisplay) {
    const propertyGrid = document.getElementById('propertyGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!propertyGrid) return;

    propertyGrid.innerHTML = '';

    if (propertiesToDisplay.length === 0) {
        if (noResults) noResults.style.display = 'block';
        if (resultCount) resultCount.textContent = '0 properties found';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    if (resultCount) resultCount.textContent = `${propertiesToDisplay.length} properties found`;

    propertiesToDisplay.forEach(property => {
        propertyGrid.appendChild(createPropertyCard(property));
    });
}

// ===== PROPERTY DETAILS PAGE =====
function loadPropertyDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    const property = properties.find(p => p.id === propertyId);

    const detailsContainer = document.getElementById('propertyDetails');
    const notFoundContainer = document.getElementById('propertyNotFound');

    if (!property) {
        if (detailsContainer) detailsContainer.style.display = 'none';
        if (notFoundContainer) notFoundContainer.style.display = 'block';
        return;
    }

    if (notFoundContainer) notFoundContainer.style.display = 'none';

    const priceLabel = property.category === 'rent' ? '/month' : '';
    const badgeClass = property.category === 'rent' ? 'badge-rent' : 'badge-buy';
    const badgeText = property.category === 'rent' ? 'For Rent' : 'For Sale';

    detailsContainer.innerHTML = `
        <div class="property-detail-container">
            <div class="property-gallery">
                <img src="${property.images[0]}" alt="${property.title}" class="gallery-main-image" id="mainImage">
                <div class="gallery-controls">
                    <button class="gallery-btn" id="prevBtn"><i class="fas fa-chevron-left"></i></button>
                    <button class="gallery-btn" id="nextBtn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            ${property.images.length > 1 ? `
                <div class="gallery-thumbnails">
                    ${property.images.map((img, index) => `
                        <img src="${img}" alt="Thumbnail ${index + 1}" class="gallery-thumbnail ${index === 0 ? 'active' : ''}"
                             onclick="changeMainImage(${index})">
                    `).join('')}
                </div>
            ` : ''}
            <div class="property-detail-content">
                <div class="property-detail-header">
                    <div class="property-detail-info">
                        <span class="property-badge ${badgeClass}">${badgeText}</span>
                        <h1>${property.title}</h1>
                        <div class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}
                        </div>
                    </div>
                    <div class="property-detail-price">
                        ${formatPrice(property.price)}${priceLabel}
                    </div>
                </div>

                ${property.bedrooms ? `
                    <div class="property-features-grid">
                        <div class="feature-item">
                            <i class="fas fa-bed"></i>
                            <span>${property.bedrooms} Bedrooms</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Bathrooms</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area} sqft</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-home"></i>
                            <span>${property.type}</span>
                        </div>
                    </div>
                ` : `
                    <div class="property-features-grid">
                        <div class="feature-item">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area} sqft</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-home"></i>
                            <span>${property.type}</span>
                        </div>
                    </div>
                `}

                <div class="property-detail-description">
                    <h2>Description</h2>
                    <p>${property.description}</p>
                </div>

                ${property.features ? `
                    <div class="property-features-list">
                        <h2>Features & Amenities</h2>
                        <div class="features-tags">
                            ${property.features.map(feature => `
                                <span class="feature-tag"><i class="fas fa-check"></i> ${feature}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="property-actions">
                    <a href="contact.html" class="btn-primary">
                        <i class="fas fa-envelope"></i> Contact Agent
                    </a>
                    <a href="contact.html" class="btn-secondary">
                        <i class="fas fa-calendar"></i> Schedule Viewing
                    </a>
                </div>
            </div>
        </div>
    `;

    // Initialize gallery
    window.currentImageIndex = 0;
    window.propertyImages = property.images;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.onclick = () => changeImage(-1);
    if (nextBtn) nextBtn.onclick = () => changeImage(1);
}

function changeImage(direction) {
    window.currentImageIndex += direction;
    if (window.currentImageIndex < 0) {
        window.currentImageIndex = window.propertyImages.length - 1;
    } else if (window.currentImageIndex >= window.propertyImages.length) {
        window.currentImageIndex = 0;
    }
    changeMainImage(window.currentImageIndex);
}

function changeMainImage(index) {
    window.currentImageIndex = index;
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = window.propertyImages[index];
    }

    // Update active thumbnail
    document.querySelectorAll('.gallery-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}


// ===== CONTACT FORM =====
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Show success message
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            document.getElementById('formSuccess').style.display = 'none';
        }, 3000);
    });
}

// ===== ADMIN FORM =====
function handleAdminForm() {
    const adminForm = document.getElementById('addPropertyForm');
    if (!adminForm) return;

    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(adminForm);
        const images = formData.get('images').split(',').map(img => img.trim()).filter(img => img);
        const features = formData.get('features').split(',').map(f => f.trim()).filter(f => f);

        const newProperty = {
            id: properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1,
            title: formData.get('title'),
            type: formData.get('type'),
            category: formData.get('category'),
            price: parseInt(formData.get('price')),
            location: formData.get('location'),
            bedrooms: formData.get('bedrooms') ? parseInt(formData.get('bedrooms')) : null,
            bathrooms: formData.get('bathrooms') ? parseInt(formData.get('bathrooms')) : null,
            area: formData.get('area') ? parseInt(formData.get('area')) : 0,
            description: formData.get('description'),
            images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'],
            features: features
        };

        properties.push(newProperty);
        saveProperties();

        // Show success message
        adminForm.style.display = 'none';
        document.getElementById('adminSuccess').style.display = 'block';

        // Reset form and update list
        setTimeout(() => {
            adminForm.reset();
            adminForm.style.display = 'block';
            document.getElementById('adminSuccess').style.display = 'none';
            displaySavedProperties();
        }, 2000);
    });

    // Clear all button
    const clearAllBtn = document.getElementById('clearAllBtn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all properties? This will reset to default properties.')) {
                properties = [...defaultProperties];
                saveProperties();
                displaySavedProperties();
            }
        });
    }

    displaySavedProperties();
}

function displaySavedProperties() {
    const savedList = document.getElementById('savedPropertiesList');
    if (!savedList) return;

    savedList.innerHTML = '';

    if (properties.length === 0) {
        savedList.innerHTML = '<p style="color: var(--text-gray);">No properties saved yet.</p>';
        return;
    }

    properties.forEach(property => {
        const item = document.createElement('div');
        item.className = 'saved-property-item';
        item.innerHTML = `
            <h3>${property.title}</h3>
            <p><strong>Type:</strong> ${property.type} | <strong>Category:</strong> ${property.category}</p>
            <p><strong>Location:</strong> ${property.location}</p>
            <p class="price">${formatPrice(property.price)}</p>
            <button onclick="deleteProperty(${property.id})">
                <i class="fas fa-trash"></i> Delete
            </button>
        `;
        savedList.appendChild(item);
    });
}

function deleteProperty(id) {
    if (confirm('Are you sure you want to delete this property?')) {
        properties = properties.filter(p => p.id !== id);
        saveProperties();
        displaySavedProperties();
    }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Check which page we're on and initialize accordingly
    if (document.getElementById('propertyGrid')) {
        filterProperties();

        // Add event listeners for filters
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const typeFilter = document.getElementById('typeFilter');
        const sortPrice = document.getElementById('sortPrice');
        const searchBtn = document.getElementById('searchBtn');

        if (searchInput) searchInput.addEventListener('input', filterProperties);
        if (categoryFilter) categoryFilter.addEventListener('change', filterProperties);
        if (typeFilter) typeFilter.addEventListener('change', filterProperties);
        if (sortPrice) sortPrice.addEventListener('change', filterProperties);
        if (searchBtn) searchBtn.addEventListener('click', filterProperties);
    }

    // Property details page
    if (document.getElementById('propertyDetails')) {
        loadPropertyDetails();
    }

    // Contact form
    handleContactForm();

    // Admin form
    handleAdminForm();
});


