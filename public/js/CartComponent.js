Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: 'img/photo/featured/mini/',
          showCart: false,
          totalSum: 0
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
        remove(item){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        getTotalSum(){
            let moneyCounter=0;
            this.cartItems.forEach( (item) => {
                moneyCounter += item.quantity*item.price;
            });
            this.totalSum = moneyCounter;
        },
        getTotalSumMinus(item){
            this.totalSum -= item.price;
        },
        getTotalSumPlus(item){
            this.totalSum += item.price;
        }


    },
    template: `<div class="cartBtn"><a class="cartBtn-img" href="#"><i class="fas fa-shopping-cart" @click='[showCart = !showCart,getTotalSum()]'></i></a>
                    <div class="cartBtn-menu" v-show="showCart">
                           <cart-item v-for="item of cartItems" :key="item.id_product" :img="imgCart" :cart-item="item" @remove="remove" @getTotalSumPlus="getTotalSumPlus" @getTotalSumMinus="getTotalSumMinus" @addProduct="addProduct"></cart-item>
                           <div class="cartBtn-menu__total">
                               <span class="cartBtn-menu__total-text">TOTAL</span>
                               <span class="cartBtn-menu__total-price">{{this.totalSum}} $</span>
                           </div>
                           <div class="cartBtn-menu__btns-block">
                                    <a href="checkout.html" class="cartBtn-menu__button">Checkout</a>
                                    <a href="shopping-cart.html" class="cartBtn-menu__button">Go to cart</a>
                           </div>
                    </div>
               </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `<div class="cartBtn-menu__product">
                       <a href="single_page.html" class="cartBtn-menu__product-link"><img class="cartBtn-menu__product-img" :src="img+cartItem.id_product+'.jpg'" :alt="'id-'+cartItem.id_product"></a>
                        <div class="cartBtn-menu__product-info">
                            <h3 class="cartBtn-menu__product-name">{{ cartItem.product_name }}</h3>
                            <img src="img/photo/cart-btn/cartBtn_stars.png" alt="4.5 stars" class="cartBtn-menu__product-stars">
                            <p class="cartBtn-menu__product-price"><button class="cart-increase-number" @click="[$emit('addProduct', cartItem), $emit('getTotalSumPlus', cartItem)]"><i class="fas fa-arrow-up"></i></button> {{ cartItem.quantity }} <span>x</span> {{ cartItem.price }}$ <span>=</span> {{cartItem.quantity*cartItem.price}}$</p>
                        </div>
                       <button class="cart-delete-btn" @click="[$emit('remove', cartItem), $emit('getTotalSumMinus', cartItem)]"><i class="fas fa-times-circle"></i></button> 
               </div>
    `
})