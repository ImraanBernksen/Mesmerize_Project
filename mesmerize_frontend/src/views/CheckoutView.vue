<template>
    <NavBar/>
    <div class="background">
    <div class="cartButton">
      <TheCart/>
    </div>
      <h2>Checkout</h2>
    <FooterComponent/>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue'
import TheCart from '@/components/TheCart.vue';
export default {
  components: {
    NavBar,
    FooterComponent,
    TheCart
}
}
</script>
<style>
    
</style>