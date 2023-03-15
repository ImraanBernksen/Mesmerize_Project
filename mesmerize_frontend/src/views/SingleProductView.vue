<template>
    <div class="background">
        <NavBar/>
        <div v-if="spinner">
            <SpinnerComponent/>      
         </div>
        <div v-else class="container">
            <div class="row" style="gap: 10rem; justify-content: center;" >
            <div class="card"  style="width: 30rem;">
                <img :src="product?.productImg" class="card-img-top mt-2">
                <div class="card-body text-center text-dark">
                    <h5 class="card-title">{{ product?.productName }}</h5>
                    <p class="card-text">{{ product?.productDescription }}</p>
                    <p class="card-text">{{ product?.category }}</p>
                    <p class="card-text">Price: R{{ product?.productPrice }}</p>
                    <p class="card-text">{{ product?.quantity }}</p>
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
  }
}
</script>
<style>
    
</style>