
// Shopping Cart
let cart = [];

// Add item to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to your cart!");
}

// Show cart details
function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    let message = "Your Cafe Cart:\n\n";

    cart.forEach(function(item, index) {

        message += (index + 1) + ". " +
                   item.name + " - ₹" +
                   item.price + "\n";

        total += item.price;
    });

    message += "\nTotal Amount: ₹" + total;

    alert(message);
}
