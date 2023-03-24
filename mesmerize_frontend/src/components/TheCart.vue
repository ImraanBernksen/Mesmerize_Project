<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#cartSystem"><i class="fa-solid fa-cart-shopping"></i></button>
  
  <!-- Modal -->
  <div class="modal fade" id="cartSystem" tabindex="-1" aria-labelledby="cartSystem" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-dark" id="cartSystem">THE CART</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
          CART IS EMPTY
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
    Name: 'TheCart'
}
</script>
<style>
    
</style>