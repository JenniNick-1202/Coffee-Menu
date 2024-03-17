let shop = document.getElementById("shop");

let shopItemsData = [ {
    id: "americano",
    name: "Americano", 
    size: ["small", "medium", "large"], 
    price: [2.50, 3.00, 3.50],
    desc: "Our freshly brewed signature black coffee.",
    images: "images/Americano.jpg"
}, {
    id: "flatWhite",
    name: "FlatWhite", 
    size: ["small", "medium", "large"], 
    price: [2.50, 3.00, 3.50],
    desc: "Freshly brewed black coffee with steamed milk.",
    images: "images/flatWhite.jpg"
}, {
     id: "latte",
    name: "Latte", 
    size: ["small", "medium", "large"], 
    price: [3.00, 3.50, 4.00],
    desc: "Our signature coffee, a creamy and frothy delight.",
    images: "images/latte.jpg"
}, {
    id: "cappuccino",
    name: "Cappuccino", 
    size: ["small", "medium", "large"], 
    price: [3.00, 3.50, 4.00],
    desc: "Our signature coffee with steamed and foamed milk.",
    images: "images/Cappuccino.jpg"
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
                    <select id="size" onchange="displayPrice(this.value, '${id}')">
                        <option value="pleaseSelect">Please Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                 </select>
            <p class="price" id="price-display-${id}"></p>
            <button type="button" id="add-to-basket-button" onclick="addToBasket('${id}')">Add to Basket</button>
        </div>
    </div>
        `;
    }).join(""));
};

let displayPrice = (size, id) => {
    let item = shopItemsData.find(x => x.id === id);
    let price;
    switch(size) {
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



