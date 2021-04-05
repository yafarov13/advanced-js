const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class List {
    constructor(container) {
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        /*calcSum()
        {
            return this.allProducts.reduce((accum, item) => accum += item.price, 0);
        }*/

    }
}

class ProductsList extends List {
    constructor(container = '.products') {
        super(container);
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://picsum.photos/200/150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}


class Cart extends List {
    constructor(container = '.cart-block') {
        super(container);
        this.addProducts()
            .then(data => { //data - объект js
                this.goods = [...data.contents];
                this.render()
            });
    }

    addProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const cartProductObj = new CartItem(product);
            this.allProducts.push(cartProductObj);
            block.insertAdjacentHTML('beforeend', cartProductObj.render());
        }
    }
}

class CartItem extends ProductItem {
    constructor(product, img = 'https://picsum.photos/200/150') {
        super(product, img);
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id}">
                <div class="cart-img-wrapper">
                    <img src="${this.img}" alt="Some img">
                    <p class="cart-desc-quantity">Кол-во: ${this.quantity}</p>
                </div>
                <div class="cart-desc">
                    <h3 class="cart-desc-title">${this.title}</h3>
                    <p class="cart-desc-price">${this.price} $</p> 
                </div>
            </div>`
    }
}


let list = new ProductsList();
let cart = new Cart();
