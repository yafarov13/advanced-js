"use strict";

let fastfood = {
    init() {
        alert('Добро пожаловать в наш Фастфуд!\nВам будут предложены варианты бургеров и наполнений.\nПриятного аппетита!');
        this.start();
    },

    start() {
        let size = prompt('У нас есть 2 размера бургеров. Для того, чтобы выбрать маленький размер, напишите "small", для того, чтобы выбрать большой размер - "big", если хотите выйти, то напишите что-то другое.');
        size = size.toLowerCase();
        if (!(size == 'small' || size == 'big')) {
            return alert('До свидания!');
        }
        let stuffing = prompt('У нас есть 3 вида начинок. Для того, чтобы выбрать Сыр, напишите "cheese", для того, чтобы выбрать Салат - "salad", для того, чтобы выбрать Картофель - "potato" если хотите выйти, то напишите что-то другое.');
        stuffing = stuffing.toLowerCase();
        if (!(stuffing == "cheese" || stuffing == "salad" || stuffing == "potato")) {
            return alert('До свидания!');
        }
        let seasoning = '';
        if (confirm('Добавить приправы?')) {
            seasoning = 'seasoning';
        }
        let mayonnaise = '';
        if (confirm('Добавить майонез?')) {
            mayonnaise = 'mayonnaise';
        }
        const myBurger = new Hamburger(size, stuffing, seasoning, mayonnaise);
        alert(`Ваш бургер стоит ${myBurger.getPrice()}р. В нем ${myBurger.getCalories()}Ккал`);
        console.log(myBurger.hamburgerInfo);
        console.log(myBurger.getPrice());
        console.log(myBurger.getCalories());
    }
}

fastfood.init();




















/*


class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    sumPriceGoods() {
        let prices = 0;
        this.goods.forEach( function (product) {
            prices += product.price;
        });
        return prices;
    }
    
}


class ProductItem{
	constructor(product, img = 'https://placehold.it/200x150'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
console.log(list.sumPriceGoods());

/*
class Cart {
    constructor() {
        addProduct() {}  добавить продукт
        removeElement() {}  удалить продукт
        clearCart() {}  очистить корзину
        getNumberProductsCart() {} получить количество продуктов
        getSumPricesCart() {}   получить общую сумму продуктов

    }
}

class ElementCart {
    constructor() {
        increaseNumberProducts() {}  увеличить количество продуктов
        reduceNumberProducts() {}  уменьшить количество продуктов
        enlargeImageProduct() {} увеличить изображение продукта
        evaluateProduct() {}  оценить продукт - либо звездочки, либо сердечки
*/

    



