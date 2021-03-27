const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item, id, image = "https://picsum.photos/200/150?random=") => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="${image}${id}">
                <span class="wrapper">
                    <p>${item.price}$</p>
                    <button class="buy-btn">Купить</button>
                </span>
            </div>`
};
const renderPage = list => {
    let productsList = list.map((item, id) => renderProduct(item, id));
    console.log(productsList);
    productsList = productsList.join(" ");
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);