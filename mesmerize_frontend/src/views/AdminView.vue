<template>
    <NavBar/>
    <div class="background">
        <h2>Admin</h2>
    <h4 class="text-center">Users</h4>
  <SpinnerComponent v-if="isLoading"/>
  <div class="container-fluid table-responsive" v-else>
    <div class="add">
    <AddUser/>
    </div>
      <!-- Users table -->
      <table class="table table-hover table-light table-borderless" >
    <thead>
      <tr class="text-center">
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Password</th>
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
        <td>{{ user.userPassword }}</td>
        <td><img :src="user.userImg" class="img-fluid"></td>
        <td>{{ user.joinDate }}</td>
        <td><UpdateUser/></td>
        <td><button type="submit" @click="deleteUser(user.userID)" class="btn btn-outline-dark"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    </tbody>
  </table><br>
  </div>

<!-- Products table -->
<h4 class="text-center">Products</h4>
<SpinnerComponent v-if="isLoading"/>
<div class="container-fluid table-responsive" v-else>
  <div class="add">
    <AddProduct/>
  </div>
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
            <td>R{{ product.productPrice }}</td>
            <td><img :src="product.productImg" class="img-fluid"></td>
            <td>{{ product.quantity }}</td>
            <td><UpdateProduct/></td>
            <td><button type="submit" @click="deleteProduct(product.productID)" class="btn btn-outline-dark"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    </tbody>
</table>
</div>
</div>

    <FooterComponent/>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import AddUser from '@/components/AddUser.vue';
import UpdateUser from '@/components/UpdateUser.vue';
import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';
export default {
  components: {
    NavBar,
    FooterComponent,
    SpinnerComponent,
    AddUser,
    UpdateUser,
    AddProduct,
    UpdateProduct,
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
        store.dispatch("getUsers")
        const products = computed(() => store.state.products)
        const users = computed(()=> store.state.users)
        return {
            products,
            users
        }
      },
methods: {
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id);
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id);
    }
},
}
</script>
<style scoped>
.add {
  padding: 15px;
}

img {
    width: 20vh;
    height: auto;
    border-radius: 30px;
}
.table {
  margin-bottom: 50px;
}
@media screen and(max-width: 720px) and (min-width: 300px) {
  .table {
    display: block;
    width: 100%;
    overflow-x: hidden;
  }
}
@media only screen and (max-width: 700px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  th {
    text-align: left;
  }
  tbody td:before {
    float: left;
    font-weight: bold;
  }
}
</style>