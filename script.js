var ListOfProducts = {
    Pet01: {
        type: "Dog Bordeaux",
        name: "Bobby",
        breed: "dog de bordeaux",
        description: "Newly born puppy",
        image: "Image of the Dog",
        price: 905
    },

    Pet02: {
        type: "Dog Shepherds",
        name: "Alex",
        breed: "German Shepherd",
        description: "3 weeks old dog",
        image: "Image of the Dog",
        price: 1200
    },

    Pet03: {
        type: "Cat Persian",
        name: "Melissa",
        breed: "Persian Cat",
        description: "8 weeks old cat",
        image: "Image of the Cat",
        price: 99.99
    },

    Pet04: {
        type: "Cat Norwegian",
        name: "Fiona",
        breed: "Norwegian Forest cat",
        description: "11 weeks old cat",
        image: "Image of the Cat",
        price: 110
    
    },

    Toy01: {
        type: "Toy Rope",
        description: "Dogs Rope Toy",
        image: "Image of the Rope Toy",
        price: 10.99

    },

    Toy02: {
        type:"Toy Teaser",
        description: "the Teaser Toy for cats",
        image: "Image of the Teaser Toy",
        price: 8

    },

    Toy03: {
        type:"Cat Wheel Exercise",
        description: "Cat Wheel toy for cats to exercise",
        image: "Image of the Cat Wheel product",
        price: 230

    },

}

var cartList = {
    HTMLCartProducts: null, //This refers to id="cart-product" in HTML
    HTMLCartItems: null, //This refers to id="current-cart" in HTML
    items: {}, //Shows the images which are in the cart
    ImageOfProducts: "images/" //Imports an image to the specific folder
}

var cartList = {
    save: function() { //This functions save all the items into the localStorage
        localStorage.setItem("cartList", JSON.stringify(cart.items));
    },
load: function() { //This functions collects the data from the localStorage and stores it all in teh Cart.Items
    cart.items = localStorage.getItem("cartList") 
    if (cart.items !== null) {cart.items = {}; }
    else {cart.items = JSON.parse (cart.items); }
},
clear: function() { //This function clears/empties the cart and items inside it
    if (confirm("Clear car?")) {
        cart.items ={};
        localStorage.removeItem("cartList");
        cart.list();

    }
}
};

var cartList = {
inCart: function() {
    cart.HTMLCartProducts = document.getElementById("list-cart");
    cart.HTMLCartItems = document.getElementById("current-cart");

    cart.HTMLCartProducts.innerHTML = "";
    let product, item, part;
    for (let id in cart.products) {

    product = cart.products[id];
    item = document.createElement("div");
    item.className = "product-item";
    cart.HTMLCartProducts.appendChild(item);

    part = document.createElement("image");
    part.src = product.image;
    part.className ="product-image";
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = product.name;
    part.className = "product-name";
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = "£" + product.price;
    part.className = "product-description";
    item.appendChild(part);

    part = document.createElement("div");
    part.innerHTML = product.description;
    part.className = "product-price";
    item.appendChild(part);

    part = document.createElement("input");
    part.type = "button";
    part.value ="Add to the Cart"
    part.className = "Product-add cart";
    part.onclick ="add.cart";
    part.dataset.id = id;
    item.appendChild(part);
}
cart.load();

cart.list();
}
};

var cart = {
    list:function(){
        cart.HTMLCartItems.innerHTML = "";
        let part, item, product;
        let empty = true;
        for (let key in cart.items) {
            if(cart.items.hasOwnProperty(key)) { empty = false;
            }
        }
    if (empty) {
        item = document.createElement("div");
        item.innerHTML = "Cart is Empty";
        cart.HTMLCartItems.appendChild(item);
    }
    else {
        let product, total = 0, subtotal = 0;
        for (let id in cart.items) {    
            product = cart.products[id];
            item = document.createElement("div");
            item.className = "class-item";
            cart.HTMLCartItems.appendChild(item);
        }
        part = document.createElement("span");
        part.innerHTML = product.name;
        part.className = "c-name";
        item.appendChild(part);
    },
    part = document.createElement("input");
    part.type = "button";
    part.value = "X";
    part.dataset.id = id;
    part.className = "c-delete cart";
    part.addEventListener("Click", cart.removeItem);
    item.appendChild(part);
    },
    part = document.createElement("input");
    

    }



}
