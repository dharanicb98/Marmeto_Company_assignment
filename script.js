let productName = document.getElementById("productName");
let description = document.getElementById("description");
const discount = document.getElementById('discount');
const comparePrice = document.getElementById("comparePrice");
const productImage = document.getElementById("#productImage");
const firstColor = document.getElementById("firstColor");
const secondColor = document.getElementById("secondColor");
const thirdColor = document.getElementById("thirdColor");
const fourthColor = document.getElementById("fourthColor");

const addToCartButton = document.querySelector('.add_to_cart');
const addToCartMessage = document.querySelector('.add-to-cart-message');

addToCartButton.addEventListener('click', () => {
    addToCartMessage.style.display = 'block';
    setTimeout(() => {
        addToCartMessage.style.display = 'none';
    }, 2000);
});

firstColor.addEventListener('click', () => {
    firstColor.textContent = "✔";
    secondColor.textContent = "";
    thirdColor.textContent = "";
    fourthColor.textContent = "";
});
secondColor.addEventListener('click', () => {
    firstColor.textContent = "";
    secondColor.textContent = "✔";
    thirdColor.textContent = "";
    fourthColor.textContent = "";
});
thirdColor.addEventListener('click', () => {
    firstColor.textContent = "";
    secondColor.textContent = "";
    thirdColor.textContent = "✔";
    fourthColor.textContent = "";
});
fourthColor.addEventListener('click', () => {
    firstColor.textContent = "";
    secondColor.textContent = "";
    thirdColor.textContent = "";
    fourthColor.textContent = "✔";
});



const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 1;

function updateCount() {
    countElement.textContent = count;
}

incrementButton.addEventListener('click', function() {
    count++;
    updateCount();
});

decrementButton.addEventListener('click', function() {
    if (count > 0) {
        count--;
        updateCount();
    }
});

updateCount();




fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
    .then(response => response.json())
    .then(data => {
        let actualPrice = parseFloat(data.product.compare_at_price);
        // const imageUrl = data.product.images[0].src;
        productName.textContent = data.product.title;
        description.innerHTML = data.product.description;
        comparePrice.textContent = data.product.price;
        // // productImage.src = url;


        const discountPercentage = Math.round(((actualPrice - parseFloat(data.product.price)) / actualPrice) * 100);
        if (!isNaN(discountPercentage)) {
            discount.textContent = discountPercentage + '% off';
        } else {
            discount.textContent = '0% off';
        }

        console.log(data, data.product.title);
    })
    .catch(error => {
        console.error('Error:', error);
    });