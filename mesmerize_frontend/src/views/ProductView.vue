<template>
  <NavBar />
  <div class="background">
    <div class="cartButton">
      <TheCart/>
    </div>
    <h2>Shop</h2>
    <div class="shop">
      <select class="btn btn-light text-start" required v-model="category">
        <option value="" selected>All categories</option>
        <option value="Hoodies">Hoodies</option>
        <option value="Sweatshirts">Sweatshirts</option>
        <option value="T-Shirts">T-Shirts</option>
        <option value="Sweatpants">Sweatpants</option>
      </select>
        <div class="input-group" style="width: 15%;">
          <input type="search" v-model="searchByName" class="form-control rounded" placeholder="Search name" aria-label="Search" aria-describedby="search-addon" />
        </div>
        <button type="button" @click.prevent="sortByPrice" class="btn btn-light">Sort by price</button>
   </div>
   <SpinnerComponent v-if="isLoading"/>
   <div class="container" v-else>
    <div class="row" style="gap: 10rem; justify-content: center;" >
    <div class="card" v-for="product in search" :key="product.productID"  style="width: 20rem;">
        <img :src="product.productImg" class="card-img-top mt-2">
        <div class="card-body text-center text-dark">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">{{ product.productDescription }}</p>
            <p class="card-text">Price: R{{ product.productPrice }}</p>
            <router-link :to="{name: 'singleProduct' , params: {id: product.productID}}"><button class="btn btn-outline-dark" v-if="this.$store.state.userAuth">View</button></router-link>
        </div>
    </div>
    </div>
    </div>
  </div>
  <FooterComponent />
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import TheCart from '@/components/TheCart.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'

export default {
  components: {
    NavBar,
    FooterComponent,
    SpinnerComponent,
    TheCart
},
methods: {
  sortByPrice() {
    this.$store.commit("setSortPrice")
  }
},
    data(){
      return {
        isLoading: true,
        searchByName: '',
        category: '',
      }
    },
    created(){
      setTimeout(()=> {
        this.isLoading = false;
      }, 2000);
    },
    setup() {
      const store = useStore()
      store.dispatch("getProducts")
      const products = computed(() => store.state.products)
      return {
        products
      }
  },
  computed: {
    search() {
      let filteredByCategory = this.products.filter(item => item.category == this.category || this.category == '')
      if (this.searchByName.trim().length > 0) {
        return filteredByCategory.filter((input) => input.productName.toLowerCase().includes(this.searchByName.trim().toLowerCase()))
      }
      return filteredByCategory
    }
  }
}
</script>
<style scoped>
.shop {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

img {
    border-radius: 8px;
}
.card { 
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px white;
}
.card:hover {
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px black;
}

body {
  background-color: black;
}

.container {
  margin-top: 50px;
  padding-bottom: 50px;
}
</style>