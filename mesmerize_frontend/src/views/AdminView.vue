<template>
    <NavBar/>
    <div class="background">
        <h2>Admin</h2>
    <h4 class="text-center">Users</h4>
    <AddUser/><br>
  <SpinnerC v-if="isLoading"/>
  <div class="container-fluid table-responsive" v-else>
      <!-- Users table -->
      <table class="table table-hover table-light table-borderless" >
    <thead>
      <tr class="text-center">
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Profile</th>
        <th scope="col">Date Joined</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="user in users" :key="user">
        <th scope="row">{{ user.userID }}</th>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.userEmail }}</td>
        <td><img :src="user.userImg" alt="" class="img-fluid"></td>
        <td>{{ user.joinDate }}</td>
        <td><UpdateUser/></td>
        <td><button><i class="bi bi-trash3"></i></button></td>
      </tr>
    </tbody>
  </table><br>
  </div>

<!-- Products table -->
<h4 class="text-center">Products</h4>
<AddProduct/><br>
<SpinnerC v-if="isLoading"/>
<div class="container-fluid table-responsive" v-else>
  <table class="table table-hover table-light table-borderless" >
    <thead>
        <tr class="text-center" >
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody class="text-center">
        <tr v-for="product in products" :key="product">
            <th scope="row">{{ product.productID }}</th>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDescription }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.productPrice }}</td>
            <td><img :src="product.productImg" alt="" class="img-fluid"></td>
            <td>{{ product.quantity }}</td>
            <td><UpdateProduct/></td>
            <td><button><i class="bi bi-trash3"></i></button></td>
        </tr>
    </tbody>
</table>
</div>
</div>

    <FooterComponent/>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: {
  NavBar,
  FooterComponent
}
}
</script>
<style>
    
</style>