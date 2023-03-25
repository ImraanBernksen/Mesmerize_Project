<template>
<button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#cartSystem"><i class="fa-solid fa-cart-shopping"></i></button>
  
  <div class="modal fade" id="cartSystem" tabindex="-1" aria-labelledby="cartSystem" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-dark" id="cartSystem">THE CART</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark" v-for="product in getCart" :key="product.cartID">
         <img :scr="product.productImg">
         <h4>Name: {{ product.productName}}</h4>
         <p>Description: {{ product.productDescription}}</p>
         <p>Category{{ product.category}}</p>
         <p>Price: R{{ product.productPrice}}</p>
         <p>Quantity: {{ product.quantity}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-outline-dark"><a style="text-decoration: none; color: black;" href="/checkout">Proceed to checkout</a></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    Name: 'TheCart',
    computed: {
      getCart() {
        console.log(this.$store.state.cart);
        return this.$store.state.cart
      }
    },
    mounted() {
      this.$store.dispatch('getCart', this.id)
    }
}
</script>
<style>
    
</style>