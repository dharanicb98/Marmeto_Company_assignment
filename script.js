const addToCartButton = document.querySelector('.add-to-cart');
const addToCartMessage = document.querySelector('.add-to-cart-message');

addToCartButton.addEventListener('click', () => {
    addToCartMessage.style.display = 'block';
    setTimeout(() => {
        addToCartMessage.style.display = 'none';
    }, 2000);
});

let productName = document.getElementById("productName");
let description = document.getElementById("description");
const discount = document.getElementById('discount');
const comparePrice = document.querySelector(".compare-price");
const productImage = document.querySelector("#productImage");


fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
    .then(response => response.json())
    .then(data => {
        let actualPrice = parseFloat(data.product.compare_at_price);
        const imageUrl = data.product.images[0].src;
        productName.textContent = data.product.title;
        description.innerHTML = data.product.description;
        comparePrice.textContent = data.product.price;
        productImage.src = imageUrl;


        const discountPercentage = Math.round(((actualPrice - parseFloat(data.product.price)) / actualPrice) * 100);
        if (!isNaN(discountPercentage)) {
            discount.textContent = discountPercentage + '% off';
        } else {
            discount.textContent = '0% off';
        }

        console.log(data, imageUrl);
    })
    .catch(error => {
        console.error('Error:', error);
    });