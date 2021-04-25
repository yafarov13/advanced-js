Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `<form action="#" class="header__form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <label>
                        <input type="text" placeholder="Search for Item..." v-model="userSearch">
                    </label>
                    <button type="submit"><i class="fas fa-search"></i></button>
            </form>`
})