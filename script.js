let shop = document.getElementById("shop");
let sizeDropdown;
let basket =[];


let shopItemsData = [ {
    id: "americano",
    name: "Americano", 
    size: ["small", "medium", "large"], 
    price: [2.50, 3.00, 3.50],
    desc: "Our freshly brewed signature black coffee, perfectly brewed.",
    images: "images/Americano.jpg",
    quantity: 1
}, {
    id: "flatWhite",
    name: "Flat White", 
    size: ["small", "medium", "large"], 
    price: [2.50, 3.00, 3.50],
    desc: "Freshly brewed black coffee with steamed milk.",
    images: "images/flatWhite.jpg",
    quantity: 1
}, {
    id: "latte",
    name: "Latte", 
    size: ["small", "medium", "large"], 
    price: [3.00, 3.50, 4.00],
    desc: "Our signature coffee, a creamy and frothy delight.",
    images: "images/latte.jpg",
    quantity: 1
}, {
    id: "cappuccino",
    name: "Cappuccino", 
    size: ["small", "medium", "large"], 
    price: [3.00, 3.50, 4.00],
    desc: "Our signature coffee with steamed and foamed milk.",
    images: "images/Cappuccino.jpg",
    quantity: 1
},
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, size, price, desc, images} = x;
        return `
        <div class="menu-card">
        <img src= ${images} alt=${name} id="menu-image"/>
            <div class="menu-card-desc">
                    <h3 class="flavor">${name}</h3>
                    <p>${desc}</p>
                    <select id="size-${id}" class="size" onchange="displayPrice(this.value, '${id}')">
                        <option value="pleaseSelect">Please Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                 </select>
            <p class="price" id="price-display-${id}"></p>
            <button type="button" class ="add-to-basket-button" id="add-to-basket-${id}" onclick="addToBasket('${id}')">Add to Basket</button>
            </div>
    </div>
        `;
    }).join(""));
};

let displayPrice = (size, id) => {
    let item = shopItemsData.find(x => x.id === id);
    let price;
    switch (size) {
        case 'small':
            price = item.price[0];
            break;
        case 'medium':
            price = item.price[1];
            break;
        case 'large':
            price = item.price[2];
            break;
        default:
            price = 'Please select a size';
    }
    price = '£' + price.toFixed(2);
    document.getElementById('price-display-' + id).innerText = price;
}

generateShop();

function addToBasket(itemId) {
    const sizeDropdown = document.getElementById(`size-${itemId}`);
    const selectedSize = sizeDropdown.value;

    if (selectedSize === 'pleaseSelect') {
        alert('Please select a size before adding to the basket.');
        return;
    }

    const addToBasketButton = document.getElementById(`add-to-basket-${itemId}`);
    button.innerText = "Added!";

}

function addToBasket(itemId) {
    const button = document.getElementById(`add-to-basket-${itemId}`);
    button.innerText = "Added!";
}
