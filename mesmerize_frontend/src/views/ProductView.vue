<template>
  <NavBar />
  <div class="background">
    <h2>Shop</h2>
    <div class="shop">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#">Hoodies</a></li>
            <li><a class="dropdown-item" href="#">T-Shirts</a></li>
            <li><a class="dropdown-item" href="#">Sweatshirts</a></li>
            <li><a class="dropdown-item" href="#">Sweatpants</a></li>
          </ul>
        </div>
        <div class="input-group" style="width: 20%;">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-light">search</button>
        </div>
        <button type="button" class="btn btn-light">Sort by Price</button>
        <button type="button" class="btn btn-light">Sort by A-Z</button>
   </div>
   <SpinnerComponent v-if="isLoading"/>
   <div class="container">
    <div class="row" style="gap: 10rem; justify-content: center;" >
    <div class="card" v-for="product in products" :key="product.productID"  style="width: 18rem;">
        <img :src="product.productImg" class="card-img-top mt-2" alt="">
        <div class="card-body text-center text-dark">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">{{ product.productDescription }}</p>
            <p class="card-text">Price: R{{ product.productPrice }}</p>
            <router-link :to="{name: 'singleProduct' , params: {id: product.productID}}"><button type="submit">View All</button></router-link>
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
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'

export default {
  components: {
    NavBar,
    FooterComponent,
    SpinnerComponent
},
data(){
          return {
            isLoading: true
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