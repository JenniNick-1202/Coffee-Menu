let hotDrinksMenu = [
        {name: "americano", size: ["small", "medium", "large"], price: [2.50, 3.00, 3.50]},
        {name: "flatWhite", size: ["small", "medium", "large"], price: [2.75, 3.25, 3.75]},
        {name: "latte", size: ["small", "medium", "large"], price: [3.00, 3.50, 4.00]},
        {name: "cappuccino", size: ["small", "medium", "large"], price: [3.00, 3.50, 4.00]},
        {name: "mocha", size: ["small", "medium", "large"], price: [3.00, 3.50, 4.00]},
        {name: "macchiato", size: ["small", "medium", "large"], price: [3.50, 4.00, 4.50]},
        {name: "tea", size: ["small", "medium", "large"], price: [1.00, 1.50, 2.00]}
];

function selectItem() {
    const selectedSize = document.getElementById("size").value;
    switch (selectedSize) {
        case "small":
            document.getElementById("price-display").textContent = "Price: £2.50";
            break;
        case "medium":
            document.getElementById("price-display").textContent = "Price: £3.00";
            break;
        case "large":
            document.getElementById("price-display").textContent = "Price: £3.50";
            break;
        default:
            document.getElementById("price-display").textContent = "Please select a size.";
            break;
    }
}