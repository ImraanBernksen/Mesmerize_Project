<template>
    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#addProducts">Add Product</button>
    
    <!-- Modal -->
    <div class="modal fade" id="addProducts" tabindex="-1" aria-labelledby="addProducts" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5 text-dark" id="addProducts">Add Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="addProduct">
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.productName" placeholder="Name" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.productDescription" placeholder="Description" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.category" placeholder="Category" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.productPrice" placeholder="Price" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.productImg" placeholder="Image" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.quantity" placeholder="Quantity" class="form-control" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-outline-dark">Add Product</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
      
    </template>
    <script>
    export default {
        Name: 'AddProduct',
        data() {
    return {
      payload: {
        productName: '',
        productDescription: '',
        category: '',
        productPrice: '',
        productImg: '',
        quantity: ''
      },
    }
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  methods: {
    addProduct() {
      console.log('Debug', this.payload);
      this.$store.dispatch('addProduct', this.payload)
    }
  }
    }
    </script>
    <style>
        
    </style>