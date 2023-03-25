<template>
    <div class="background-single">
        <NavBar/>
        <SpinnerComponent v-if="isLoading"/>
        <div class="container" v-else>
            <div class="row align-items-center" >
              <div class="col-sm-6" style="margin-top: 50px;">
                <img :src="product?.productImg" class="card-img-top mt-2">
              </div>
              <div class="col-sm-6">
                <div class="card bg-black"   style="width: 100%;">
                    <div class="card-body text-start">
                        <h5 class="card-title">Name: {{ product?.productName }}</h5><br>
                        <h5 class="card-text">Description: {{ product?.productDescription }}</h5><br>
                        <h5 class="card-text">Category: {{ product?.category }}</h5><br>
                        <h5 class="card-text">Price: R{{ product?.productPrice }}</h5><br>
                        <h5 class="card-text">Quantity: {{ product?.quantity }}</h5><br>
                        <button class="btn btn-outline-light" @click="addCart(product)">Add to Cart</button>
                    </div>
                </div>
              </div>
        </div>
        </div>
        <FooterComponent/>
    </div>
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
    const store = useStore();
    const product =
      computed(() => store.state.product)
    const spinner =
      computed(() => store.getters.setSpinner);
    return {
      product,
      spinner
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods: {
    async addCart(product) {
      const userID = localStorage.getItem('user', );
      console.log(userID, product.productID);
      this.$store.dispatch('addCart', {
        userID: userID,
        payload: {
          userID: userID,
          productID: product.productID
        }
      })
    }
  }
}
</script>
<style scoped>
.background-single{
  background-color: white;
}

.container {
  padding: 10px;
}
    
</style>