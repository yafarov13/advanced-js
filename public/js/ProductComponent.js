Vue.component('products', {
   data(){
       return {
           filtered: [],
           products: [],
           imgProduct: 'img/photo/featured/'
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="featured__items">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"
                @getTotalSumCartPlus="$parent.$refs.cart.getTotalSumPlus"></product>
              </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
             <div class="featured__items_block">
                    <a href="single_page.html" class="featured__items_link">
                        <img :src="img+product.id_product+'.jpg'" :alt="'id-'+product.id_product">
                        <p class="featured__items_text">{{product.product_name}}</p>
                        <p class="featured__items_price">{{product.price}}$</p>
                    </a>
                    <div class="featured__add">
                        <button class="featured__add_btn" @click="[$emit('add-product', product), $emit('getTotalSumCartPlus', product)]">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
             </div>
    `
})