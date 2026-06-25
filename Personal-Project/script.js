function addToCart(productName) {
    const toast = document.getElementById("toast");

    if (toast) {
        toast.textContent = productName + " was added to your cart!";
        toast.classList.add("show-toast");

        setTimeout(function () {
            toast.classList.remove("show-toast");
        }, 2500);
    } else {
        alert(productName + " was added to your cart!");
    }
}

function filterProducts(category, clickedButton) {
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(function (button) {
        button.classList.remove("active-filter");
    });

    clickedButton.classList.add("active-filter");

    products.forEach(function (product) {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function sendMessage(event) {
    event.preventDefault();

    const result = document.getElementById("result");

    result.textContent = "Thank you! Your message has been sent successfully.";
    result.classList.add("success-message");

    event.target.reset();
}

function showInfo() {
    alert("BeautyGlow PRO was created to make beauty and self-care simple, modern and enjoyable.");
}