// Sample cart items data (replace this with actual data)
const cartItems = [
    { name: "Palak Paneer", price: 300, quantity: 2 },
    { name: "Rajma", price: 350, quantity: 1 },
    // Add more items as needed
];

// Function to calculate total price of items in cart
function calculateTotal() {
    const totalElement = document.getElementById("total-price");
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    totalElement.textContent = "₹" + total;
}

// Function to display cart items
function displayCartItems() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
            <button class="btn btn-danger btn-sm remove-item">Remove</button>
        `;
        cartItemsElement.appendChild(itemElement);

        const removeButton = itemElement.querySelector(".remove-item");
        removeButton.addEventListener("click", () => {
            cartItems.splice(cartItems.indexOf(item), 1);
            displayCartItems();
            calculateTotal();
        });
    });

    calculateTotal();
}

// Call the function to initially display cart items
displayCartItems();
