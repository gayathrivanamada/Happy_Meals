function handleSearch(event) {
    event.preventDefault();
    var searchInput = document.getElementById("search-input").value;
    var options = document.getElementById("options").options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase() === searchInput.toLowerCase()) {
            window.location.href = options[i].getAttribute("data-url");
            break;
        }
    }
}
// Define an array to store cart items
var cart = [];

// Function to add an item to the cart
function addItemToCart(item) {
    cart.push(item);
    console.log('Item added to cart:', item);
}

// Get all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.button');

// Add click event listeners to each button
addToCartButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        var itemName = document.querySelectorAll('.food-card-heading')[index].textContent;
        addItemToCart(itemName);
    });
});
