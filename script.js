// Function to show the popup with product details
function showPopup(title, description, price) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-price').textContent = `Price: ${price}`;
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to add to cart (mockup)
function addToCart() {
    alert('Product added to cart!');
    closePopup();
}
